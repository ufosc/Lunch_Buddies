const path = require('path');
const express = require('express');

// Creating express router
const router = express.Router();
const BUILD_DIR = path.join(__dirname, '../../dist');

// Define all the application routes here

//Specify api routes (server routes that don't server HTML files but still return information)
router.get('/api/test', (req, res) =>  {
    res.send({body: "Hello"});
});

// Exporting router
module.exports = router;
