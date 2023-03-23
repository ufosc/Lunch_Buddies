package main

import (
	"api/accounts"
	"api/database"
	"api/login"

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

func main() {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Println("No .env file found... Using environment variables instead.")
	}

	dbUrl := fmt.Sprintf("%s:%s@tcp(%s)/%s?parseTime=true",
		os.Getenv("MYSQL_USER"),
		os.Getenv("MYSQL_PASSWORD"),
		os.Getenv("MYSQL_HOST"),
		os.Getenv("MYSQL_DB_NAME"))
	database.InitDatabase(dbUrl)

	log.Println(fmt.Sprintf("Serving at %s:%s...", os.Getenv("API_HOST"), os.Getenv("API_PORT")))
	router := mux.NewRouter()

	// include other file routes here, passing in the router
	accounts.HandleAccountRoutes(router)
	login.HandleLoginRoutes(router)

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
