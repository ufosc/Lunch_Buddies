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

// Account represents the JSON structure of an account.
type Account struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// createAccount handles the creation of a new user account.
func createAccount(response http.ResponseWriter, request *http.Request) {
	log.Println("Received request to /login/createAccount")

	status := false
	defer func() {
		fmt.Fprintf(response, fmt.Sprintf("%v", status))
	}()

	var acc Account
	err := json.NewDecoder(request.Body).Decode(&acc)

    // Check for JSON decoding errors or empty email.
	if err != nil || acc.Email == "" {
		return
	}

    // Execute a database query to insert the new account.
	result, err := database.Execute("INSERT INTO Accounts (email, password) VALUES (?, SHA2(?, 256))", acc.Email, acc.Password)
	if err != nil {
		return
	}

	// Check if any rows were affected by the database operation.
	rowsAffected, err := result.RowsAffected()
	if err != nil || rowsAffected == 0 {
		return
	}

	status = true
}

// validateAccount handles the validation of user credentials and issues a JWT token on success.
func validateAccount(response http.ResponseWriter, request *http.Request) {
	log.Println("Received request to /login/validateAccount")

	FAILURE_RESPONSE := "Failed to validate account"

	var acc Account
	err := json.NewDecoder(request.Body).Decode(&acc)

	if err != nil {
		fmt.Fprint(response, FAILURE_RESPONSE)
		return
	}

    // Get a JWT token for the provided email and password.
	token, err := auth.GetToken(acc.Email, acc.Password)

    // Check for authentication errors.
	if err != nil {
		fmt.Fprint(response, FAILURE_RESPONSE)
		return
	}

    // Sign the JWT token with a secret and send it in the response.
	tokenString, err := token.SignedString([]byte(os.Getenv("JWT_SECRET")))

	if err != nil {
		fmt.Fprint(response, FAILURE_RESPONSE)
		return
	}

	fmt.Fprint(response, tokenString)
}

// HandleLoginRoutes registers login-related routes with the provided router.
func HandleLoginRoutes(r *mux.Router) {
	r.HandleFunc("/login/createAccount", createAccount).Methods("POST")
	r.HandleFunc("/login/validateAccount", validateAccount).Methods("POST")
}
