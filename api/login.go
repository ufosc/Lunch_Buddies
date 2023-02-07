package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func createAccount(response http.ResponseWriter, request *http.Request) {
	log.Println("Received request to /login/createAccount")
}

func verifyAccount(response http.ResponseWriter, request *http.Request) {
	log.Println("Received request to /login/verifyAccount")
}

func handleLoginRoutes(r *mux.Router) {
	r.HandleFunc("/login/createAccount", createAccount).Methods("POST")
	r.HandleFunc("/login/verifyAccount", verifyAccount).Methods("POST")
}
