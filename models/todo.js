// Import Mongoose
const mongoose = require('mongoose');

// Define the Todo Schema
const todoSchema = new mongoose.Schema({
    // Define the 'descriptionDB' field
    descriptionDB: {
        type: String,
        required: true,
    },
    // Define the 'categoryDB' field
    categoryDB: {
        type: String,
        required: true,
    },
    // Define the 'dueDateDB' field
    dueDateDB: {
        type: String,
        required: true,
    },
});

// Create the Todo model based on the schema
const Todo = mongoose.model('Todo', todoSchema);

// Export the Todo model
module.exports = Todo;
