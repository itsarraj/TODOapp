// Import the Express library
const express = require('express');

// Create a new router object
const router = express.Router();

// Import the todoController module
const todoController = require('../controllers/todo_controller.js');

// Define a route for handling GET requests to the root URL
router.get('/', todoController.todo);

// Define a route for handling POST requests to create new to-do items
router.post('/create-todo', todoController.createTodo);

// Define a route for handling POST requests to delete one or more to-do items
router.post('/delete-todo', todoController.deleteTodo);

// Export the router object so it can be used by other modules
module.exports = router;
