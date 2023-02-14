package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

var db *sql.DB

func main() {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// dbUrl := fmt.Sprintf("%s:%s@tcp(%s)/%s",
	// 	os.Getenv("MYSQL_USER"),
	// 	os.Getenv("MYSQL_PASSWORD"),
	// 	os.Getenv("MYSQL_HOST"),
	// 	os.Getenv("MYSQL_DB_NAME"))

	// db, err = sql.Open("mysql", dbUrl)

	// if err != nil {
	// 	log.Fatal("Couldn't connect to db")
	// }

	log.Println(fmt.Sprintf("Serving at %s:%s...", os.Getenv("API_HOST"), os.Getenv("API_PORT")))
	router := mux.NewRouter()

	// include other file routes here, passing in the router
	handleLoginRoutes(router)

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
	})

	handler := c.Handler(router)

	server := &http.Server{
		Handler:      handler,
		Addr:         fmt.Sprintf("0.0.0.0:%s", os.Getenv("API_PORT")),
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Fatal(server.ListenAndServe())
}
