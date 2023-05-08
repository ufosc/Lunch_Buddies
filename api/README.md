# API Documentation

## Login Endpoints

| Endpoint                      | Description                                         | Body                                                                        | Query Parameters | Response                                                                                                                            |
| ----------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| POST `/login/createAccount`   | Creates an account in the database.                 | A JSON object literal containing an `email` string and a `password` string  |                  | `true` if the account was created, `false` otherwise (for example, if the account already exists or the database is not accessible) |
| POST `/login/validateAccount` | Checks if an account (email/password combo) exists. | A JSON object literal containing an `email` string and a `password` string. |                  | A JWT token if the account is valid                                                                                                 |

## Message Endpoints
| Endpoint                     | Description                                                                                                      | Body                                                    | Query Parameters | Response                                |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------- | --------------------------------------- |
| GET `/messages/`             | Gets all messages for the user associated with the provided auth token                                           |                                                         |                  | A JSON array containing the messages    |
| GET `/messages/{email}`      | Gets all messages for the user associated with the provided auth token with the other user identified by `email` |                                                         |                  | A JSON array containing the messages    |
| POST `/messages/sendMessage` | Sends a message from the user associated with the provided auth token                                            | A JSON object literal with a `receiver` and a `message` |                  | A message indicating success or failure |


## Account Endpoints
| Endpoint                       | Description                                | Body                                                                                                                   | Query Parameters | Response                                                                                             |
| ------------------------------ | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------- |
| POST `/accounts/updateProfile` | Changes an account's info in the database. | A JSON object literal containing a `firstName` and `lastName` string. Use an empty string to leave the info unchanged. |                  | `true` if the account was changed, `false` otherwise (e.g. incorrect password, or no changes needed) |
