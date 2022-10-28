/**
 * Server backend file using express.js
 * 
 */

// Determine development or production server
const ENVIRONMENT = 'development';

// List server imports
const path = require('path');
const express= require('express');
const router = require('./routes.js');

// Setup the express app and some useful constants
const APP = express();
APP.disable("x-powered-by");
const PORT = process.env.PORT || 8080;

// Allow the app to use the routes we defined in the router.js file
APP.use('/', router);

// Make server listen
APP.listen(PORT, () => {
    console.log(`Server is in ${ENVIRONMENT} mode listening @ http://localhost:${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
