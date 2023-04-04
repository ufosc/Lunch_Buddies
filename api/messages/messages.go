package messages

import (
	"api/auth"
	"api/database"

	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

type Message struct {
	ID       int       `json:"id"`
	Sender   string    `json:"sender"`
	Receiver string    `json:"receiver"`
	Message  string    `json:"message"` // assumes text messages - should probably use []byte
	Created  time.Time `json:"created"`
}

// Gets all messages for a user with the given `username` (an email).
func getMessages(username string) ([]Message, error) {
	exists := false
	database.QueryValue(&exists, "SELECT EXISTS(SELECT * FROM Accounts WHERE email=?)", username)

	if !exists {
		return nil, errors.New("no such user")
	}

	messages := make([]Message, 0)
	database.Query(&messages, "SELECT * FROM Chats WHERE sender=? OR receiver=?", username, username)
	return messages, nil
}

// Sends a (text) message from `sender` to `receiver` with the given `content`.
func sendMessage(sender, receiver, content string) error {
	fromExists := false
	database.QueryValue(&fromExists, "SELECT EXISTS(SELECT * FROM Accounts WHERE email=?)", sender)
	if !fromExists {
		return errors.New("no such user")
	}

	toExists := false
	database.QueryValue(&toExists, "SELECT EXISTS(SELECT * FROM Accounts WHERE email=?)", receiver)
	if !toExists {
		return errors.New("no such user")
	}

	_, err := database.Execute("INSERT INTO Chats (sender, receiver, message) VALUES (?, ?, ?)", sender, receiver, content)
	return err
}

func getAllUserMessagesHandler(response http.ResponseWriter, request *http.Request) {
	log.Println("Received request to /messages/")

	email, err := auth.ValidateAuthHeader(request.Header.Get("Authorization"))
	if err != nil {
		log.Println(err)
		return
	}

	messages, err := getMessages(email)
	if err != nil {
		fmt.Fprint(response, "Failed to get messages")
		return
	}

	err = json.NewEncoder(response).Encode(messages)
	if err != nil {
		log.Println(err)
		fmt.Fprintf(response, "Failed to get messages")
		return
	}
}

func HandleLoginRoutes(router *mux.Router) {
	router.HandleFunc("/messages/", getAllUserMessagesHandler).Methods("GET")
}
