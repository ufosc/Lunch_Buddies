package login

import (
	"api/auth"
	"api/database"
	"os"

	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
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

	FAILURE_RESPONSE := "Failed to validate account"

	var acc Account
	err := json.NewDecoder(request.Body).Decode(&acc)

	if err != nil {
		fmt.Fprint(response, FAILURE_RESPONSE)
		return
	}

	token, err := auth.GetToken(acc.Email, acc.Password)

	if err != nil {
		fmt.Fprint(response, FAILURE_RESPONSE)
		return
	}

	tokenString, err := token.SignedString([]byte(os.Getenv("JWT_SECRET")))

	if err != nil {
		fmt.Fprint(response, FAILURE_RESPONSE)
		return
	}

	fmt.Fprint(response, tokenString)
}

func HandleLoginRoutes(r *mux.Router) {
	r.HandleFunc("/login/createAccount", createAccount).Methods("POST")
	r.HandleFunc("/login/validateAccount", validateAccount).Methods("POST")
}
