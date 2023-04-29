package database

import (
	"database/sql"
	"log"
	"reflect"
	"strings"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

func Query[T any](arr *[]T, query_ string, args ...any) {
	rows, err := db.Query(query_, args...)
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

func QueryValue[T any](value *T, query_ string, args ...any) error {
	err := db.QueryRow(query_, args...).Scan(value)
	return err
}

func Execute(exec string, args ...any) (sql.Result, error) {
	result, err := db.Exec(exec, args...)
	return result, err
}

func InitDatabase(dbUrl string) {
	var err error
	db, err = sql.Open("mysql", dbUrl)

	if err != nil {
		panic(err)
	}

	err = db.Ping()
	if err != nil {
		log.Panicln("Could not connect to database. Check your .env file. Error details:\n", err)
	}
}
