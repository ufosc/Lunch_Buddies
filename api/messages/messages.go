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

// Gets all messages for a user with the given `email1`. If `email2` is
// not an empty string, gets all messages between `email1` and `email2`.
func getMessages(email1 string, email2 string) ([]Message, error) {
	exists := false
	database.QueryValue(&exists, "SELECT EXISTS(SELECT * FROM Accounts WHERE email=?)", email1)

	if !exists {
		return nil, errors.New("no such user")
	}

	messages := make([]Message, 0)
	if email2 == "" {
		database.Query(&messages, "SELECT * FROM Chats WHERE sender=? OR receiver=?", email1, email1)
	} else {
		database.Query(&messages, "SELECT * FROM Chats WHERE (sender=? AND receiver=?) OR (sender=? AND receiver=?)", email1, email2, email2, email1)
	}
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

func getMessagesHandler(response http.ResponseWriter, request *http.Request) {
	log.Println("Received request to /messages/")

	email, err := auth.ValidateAuthHeader(request.Header.Get("Authorization"))
	if err != nil {
		response.WriteHeader(http.StatusUnauthorized)
		log.Println(err)
		return
	}

	email2 := mux.Vars(request)["email"]

	messages, err := getMessages(email, email2)
	if err != nil {
		response.WriteHeader(http.StatusInternalServerError)
		fmt.Fprint(response, "Failed to get messages")
		return
	}

	err = json.NewEncoder(response).Encode(messages)
	if err != nil {
		log.Println(err)
		response.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(response, "Failed to get messages")
		return
	}
}

func sendMessageHandler(response http.ResponseWriter, request *http.Request) {
	log.Println("Received request to /messages/sendMessage")

	email, err := auth.ValidateAuthHeader(request.Header.Get("Authorization"))
	if err != nil {
		response.WriteHeader(http.StatusUnauthorized)
		fmt.Fprint(response, "Invalid authorization token")
		return
	}

	var message Message
	err = json.NewDecoder(request.Body).Decode(&message)
	if err != nil {
		response.WriteHeader(http.StatusBadRequest)
		fmt.Fprint(response, "Failed to send message")
		return
	}

	err = sendMessage(email, message.Receiver, message.Message)
	if err != nil {
		response.WriteHeader(http.StatusBadRequest)
		fmt.Fprint(response, "Failed to send message")
		return
	}

	fmt.Fprint(response, "Message sent")
}

func HandleLoginRoutes(router *mux.Router) {
	router.HandleFunc("/messages/", getMessagesHandler).Methods("GET")
	router.HandleFunc("/messages/{email}", getMessagesHandler).Methods("GET")
	router.HandleFunc("/messages/sendMessage", sendMessageHandler).Methods("POST")
}
