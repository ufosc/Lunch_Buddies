package database

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"reflect"
	"strings"
)

var db *sql.DB

func Query[T any](query_ string, arr *[]T) {
	rows, err := db.Query(query_)
	if err != nil {
		panic(err)
	}

	structType := reflect.TypeOf(arr).Elem().Elem()

	var fields []string
	cols, err := rows.Columns()
	for _, col := range cols {
		found := false
		for i := 0; i < structType.NumField(); i++ {
			if strings.EqualFold(structType.Field(i).Name, col) || strings.EqualFold(structType.Field(i).Tag.Get("database"), col) {
				fields = append(fields, structType.Field(i).Name)
				found = true
			}
		}
		if !found {
			fields = append(fields, "")
		}
	}

	for rows.Next() {
		newStruct := reflect.New(structType).Elem()
		var properties []interface{}

		for _, field := range fields {
			if field == "" {
				var nothing interface{}
				properties = append(properties, &nothing)
			} else {
				properties = append(properties, newStruct.FieldByName(field).Addr().Interface())
			}
		}

		rows.Scan(properties...)
		*arr = append(*arr, newStruct.Interface().(T))
	}
}

func QueryValue[T any](query_ string, value *T) error {
	err := db.QueryRow(query_).Scan(value)
	return err
}

func Execute(exec string) (sql.Result, error) {
	result, err := db.Exec(exec)
	return result, err
}

func InitDatabase(dbUrl string) {
	var err error
	db, err = sql.Open("mysql", dbUrl)

	if err != nil {
		panic(err)
	}

}
