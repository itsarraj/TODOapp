// Import the Express library
const express = require('express');

// Import the path library
const path = require('path');

// Define the port number that the server will run on
const port = 8000;

// Create a new Express application
const app = express();

// Import the database configuration
const db = require('./config/mongoose');

// Import the Todo model
const Todo = require('./models/todo');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the path to the views folder
app.set('views', './views');

// Use middleware to parse form data
app.use(express.urlencoded());

// Serve static files from the 'assets' folder
app.use(express.static('assets'));

// Define the root route and use the routes defined in the 'routes.js' file
app.use('/', require('./routes'));

// Start the server and listen on the specified port
app.listen(port, function (err) {
    if (err) {
        console.log(`Error running server: ${err}`);
    }
    console.log(`Server running on port ${port}`);
});
