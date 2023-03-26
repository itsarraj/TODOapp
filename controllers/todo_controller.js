// Import the TodoLists model
const TodoLists = require('../models/todo.js');

// Function for rendering home page
module.exports.todo = function (req, res) {
    // Fetch all to-do items from the database using Mongoose
    TodoLists.find({}, function (err, todo) {
        if (err) {
            console.log(err);
            return;
        }
        // Render the todo view and pass the to-do items as an object
        return res.render('todo', {
            title: 'todo',
            TodoLists: todo,
        });
    });
};

// Function for creating new to-do items
module.exports.createTodo = function (req, res) {
    // Extract data from the request body
    dueDate = req.body.dueDateInput;

    // Create a new to-do item and save it to the database using Mongoose
    TodoLists.create(
        {
            descriptionDB: req.body.descriptionInput,
            categoryDB: req.body.categoryInput,
            dueDateDB: req.body.dueDateInput,
        },

        function (err, newTODO) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(newTODO);
            // Redirect the user back to the main page
            return res.redirect('back');
        }
    );
};

// Function for deleting one or more to-do items
module.exports.deleteTodo = function (req, res) {
    // Extract the IDs of the to-do items to be deleted from the query parameters
    let id = req.query.id;
    idArray = id.split(',');
    console.log(` DELETE ID : ${id}`);
    console.log(` DELETE ID ARRAY : ${idArray}`);

    // Loop through the array of IDs and delete each to-do item from the database using Mongoose
    for (let i = 0; i < idArray.length; i++) {
        TodoLists.findByIdAndDelete(idArray[i], function (err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(idArray[i] + ' deleted');
        });
    }

    // Redirect the user back to the main page
    return res.redirect('back');
};
