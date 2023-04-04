package auth

import (
	"api/database"
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

func ValidateAuthHeader(authHeader string) (string, error) {
	if !strings.HasPrefix(authHeader, "Bearer ") {
		return "", fmt.Errorf("invalid auth header")
	}
	authHeader = strings.TrimPrefix(authHeader, "Bearer ")
	return ValidateToken(authHeader)
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
func GetToken(email string, password string) (*jwt.Token, error) {
	exists := false
	database.QueryValue(&exists, "SELECT SHA2(?, 256)=password FROM Accounts WHERE email=?", password, email)

	if !exists {
		return nil, fmt.Errorf("invalid email or password")
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.RegisteredClaims{
		IssuedAt:  jwt.NewNumericDate(time.Now()),
		ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * 24)),
		Issuer:    "LunchBuddies",
		Subject:   email,
	})

	return token, nil
}
