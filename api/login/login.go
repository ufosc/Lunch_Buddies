package login

import (
	"api/database"

	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

type Account struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func createAccount(response http.ResponseWriter, request *http.Request) {
	log.Println("Received request to /login/createAccount")

	status := false
	defer func() {
		fmt.Fprintf(response, fmt.Sprintf("%v", status))
	}()

	var acc Account
	err := json.NewDecoder(request.Body).Decode(&acc)

	if err != nil || acc.Email == "" {
		return
	}

	result, err := database.Execute("INSERT INTO Accounts (email, password) VALUES (?, SHA2(?, 256))", acc.Email, acc.Password)
	if err != nil {
		return
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil || rowsAffected == 0 {
		return
	}

	status = true
}

func validateAccount(response http.ResponseWriter, request *http.Request) {
	log.Println("Received request to /login/validateAccount")

	status := false
	defer func() {
		fmt.Fprintf(response, fmt.Sprintf("%v", status))
	}()

	var acc Account
	err := json.NewDecoder(request.Body).Decode(&acc)

	if err != nil {
		return
	}

	_ = database.QueryValue(&status, "SELECT SHA2(?, 256)=password FROM Accounts WHERE email=?", acc.Password, acc.Email)
}

func HandleLoginRoutes(r *mux.Router) {
	r.HandleFunc("/login/createAccount", createAccount).Methods("POST")
	r.HandleFunc("/login/validateAccount", validateAccount).Methods("POST")
}
