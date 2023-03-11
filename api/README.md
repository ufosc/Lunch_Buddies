# API Documentation

## Login Endpoints

| Endpoint                      | Description                                         | Body                                                                        | Query Parameters | Response                                                                                                                            |
| ----------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| POST `/login/createAccount`   | Creates an account in the database.                 | A JSON object literal containing an `email` string and a `password` string  |                  | `true` if the account was created, `false` otherwise (for example, if the account already exists or the database is not accessible) |
| POST `/login/validateAccount` | Checks if an account (email/password combo) exists. | A JSON object literal containing an `email` string and a `password` string. |                  | `true` if the account is valid, `false` otherwise (for example, if the email or password is incorrect)                              |