package login

import (
	"api/database"
	"os"
	"time"

	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/golang-jwt/jwt/v5"
	"github.com/gorilla/mux"
)

type Account struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// Get the user a JWT token is for, or an error if the token is invalid
func ValidateToken(tokenString string) (string, error) {
	token, err := jwt.ParseWithClaims(tokenString, &jwt.RegisteredClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("JWT_SECRET")), nil
	})

	if err != nil {
		return "", err
	}

	claims, ok := token.Claims.(*jwt.RegisteredClaims)
	if !ok || !token.Valid || time.Now().After(claims.ExpiresAt.Time) {
		return "", fmt.Errorf("invalid token")
	}

	return claims.Subject, nil
}

// Get a JWT token for a user, or an error if the user is invalid
func GetToken(username string, password string) (*jwt.Token, error) {
	exists := false
	database.QueryValue(&exists, "SELECT SHA2(?, 256)=password FROM Accounts WHERE email=?", password, username)

	if !exists {
		return nil, fmt.Errorf("invalid username or password")
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.RegisteredClaims{
		IssuedAt:  jwt.NewNumericDate(time.Now()),
		ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * 24)),
		Issuer:    "LunchBuddies",
		Subject:   username,
	})

	return token, nil
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

	token, err := GetToken(acc.Email, acc.Password)

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
