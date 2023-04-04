package accounts

import (
	"api/auth"
	"api/database"

	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

type AccountChanges struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
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

	user, err := auth.ValidateAuthHeader(request.Header.Get("Authorization"))

	if err != nil {
		return
	}

	var acc AccountChanges
	err = json.NewDecoder(request.Body).Decode(&acc)

	if err != nil {
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
			result, err := database.Execute(query, change.Content, user)
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
