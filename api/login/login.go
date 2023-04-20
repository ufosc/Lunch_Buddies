package login

import (
	"api/auth"
	"api/database"
	"crypto/rand"
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

	salt := generateSalt()
	saltedPassword := acc.Password + salt

	result, err := database.Execute("INSERT INTO Accounts (email, password, salt) VALUES (?, SHA2(?, 256), ?)", acc.Email, saltedPassword, salt)
	if err != nil {
		log.Println(err)
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

	salt, err := getSalt(acc.Email)
	if err != nil {
		fmt.Fprint(response, FAILURE_RESPONSE)
		return
	}
	saltedPassword := acc.Password + salt

	token, err := auth.GetToken(acc.Email, saltedPassword)

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

// Returns a secure random salt that is 16 characters long.
func generateSalt() string {
	b := make([]byte, 8)
	rand.Read(b)
	return fmt.Sprintf("%x", b)
}

func getSalt(email string) (string, error) {
	salt := ""
	err := database.QueryValue(&salt, "SELECT salt FROM Accounts WHERE email = ?", email)
	if err != nil || salt == "" {
		return "", err
	}
	return salt, nil
}

func HandleLoginRoutes(r *mux.Router) {
	r.HandleFunc("/login/createAccount", createAccount).Methods("POST")
	r.HandleFunc("/login/validateAccount", validateAccount).Methods("POST")
}
