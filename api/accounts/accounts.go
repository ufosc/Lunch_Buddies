package accounts

import (
	"api/database"

	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

type Account struct {
	Email           string `json:"email"`
	CurrentPassword string `json:"password"`
	FirstName       string `json:"firstName"`
	LastName        string `json:"lastName"`
}

func updateProfile(response http.ResponseWriter, request *http.Request) {
	type ChangedElement struct {
		SQLColumnName string
		Content       string
	}

	status := false
	defer func() {
		fmt.Fprint(response, status)
	}()

	var acc Account
	err := json.NewDecoder(request.Body).Decode(&acc)

	if err != nil || acc.Email == "" {
		return
	}

	accountExists := false
	database.QueryValue(&accountExists, "SELECT SHA2(?, 256)=password FROM Accounts WHERE email=?", acc.CurrentPassword, acc.Email)
	if !accountExists {
		// either email or password wrong
		return
	}

	rowsAffected := int64(0)

	possibleChanges := []ChangedElement{
		{"firstName", acc.FirstName},
		{"lastName", acc.LastName},
	}

	for _, change := range possibleChanges {
		if change.Content != "" {
			query := "UPDATE Accounts SET " + change.SQLColumnName + " = ? WHERE email=?"
			result, err := database.Execute(query, change.Content, acc.Email)
			if err != nil {
				fmt.Println(err)
				return
			}
			rows, err := result.RowsAffected()
			if err != nil {
				return
			}
			rowsAffected += rows
		}
	}

	if rowsAffected == 0 {
		return
	}

	status = true
}

func HandleAccountRoutes(r *mux.Router) {
	r.HandleFunc("/accounts/updateProfile", updateProfile).Methods("POST")
}
