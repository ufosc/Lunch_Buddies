# WELCOME TO LUNCH BUDDIES!!!
### _An application that lets you find and match with like-minded students on campus to study, have a meal with, and more!_
---
# Table of Contents
1. [Install](#install)
2. [Usage](#usage)
3. [Contributing](#contributing)
    - [Tips](#tips)

---
## Install

- To start, clone the repository: `git clone https://github.com/ufosc/Lunch_Buddies.git`
- Navigate to the project directory `cd Lunch_Buddies`
- If you haven't already, install Node.js (version 16.18.0) through this link: [Download Node.js](https://nodejs.org/en/)
    - To check if you have successfully installed Node.js, you should see the current version of Node.js installed on your computer if you type this into the terminal: 
    `node --version` or `npm --version`
- You will also need to install Golang, which is what we are using for the API. You can do through this link: [Download Golang](https://go.dev/dl/)
- Once this is finished, start VS Code and open the "Lunch_Buddies" file. Open the terminal within VS Code and `cd Lunch_Buddies`. 
- After this, enter the client directory with the command `cd client` and type `npm install` to download the required packages for the front-end.
    - If you havent already dowloaded Expo CLI, type this into the terminal: `npm i expo-cli`
- Then, enter the api directory with the command `cd ../api` and run the command `go get` to download the go packages that are needed.`
    
---
## Usage
- Before running the application, copy the `.env.example` file into a file called `.env` and fill in the corresponding credentials.
- To run the front-end, use the command `npm run start` in the client folder.
- To run the server, enter the api folder and run `go build`, and then run the executable that is created.

- Download the "Expo Go" app in order to emulate the current version of your app. 
    - For iOS: scan QR code with iPhone camera
    - For Android: use the Expo Go app to scan the QR code

---
## Contributing
- All contributions are welcome and appreciated!!
    - Programming Languages: JavaScript, Go
    - UI software framework: React Native

#### Tips:
- You can use these links to get familiar with programming languages/frameworks/libraries we will be using:
    - [React Native Getting Started](https://reactnative.dev/docs/environment-setup)
    - [React Native App Tutorial](https://www.youtube.com/watch?v=0-S5a0eXPoc)
    - [Beginners JavaScript Tutorial](https://www.youtube.com/watch?v=PkZNo7MFNFg&t=2783s)
