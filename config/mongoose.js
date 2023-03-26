// Require the Mongoose library
const mongoose = require('mongoose');

// Connect to the "todo_list_db" database running on localhost
mongoose.connect('mongodb://localhost/todo_list_db');

// Get a reference to the database connection object
const db = mongoose.connection;

// Log an error message if there is an issue connecting to the database
db.on('error', console.error.bind(console, 'Error connecting to database'));

// Once the connection is open, log a success message
db.once('open', function () {
    console.log('Successfully connected to database');
});
