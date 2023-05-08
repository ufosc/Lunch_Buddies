CREATE TABLE Accounts (
    email VARCHAR(50) PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    password CHAR(64) NOT NULL
);
CREATE TABLE Chats (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sender VARCHAR(50),
    receiver VARCHAR(50),
    message BLOB,
    created TIMESTAMP DEFAULT now(),
    FOREIGN KEY (sender) REFERENCES Accounts(email),
    FOREIGN KEY (receiver) REFERENCES Accounts(email)
);
