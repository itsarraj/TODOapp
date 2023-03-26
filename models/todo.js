const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    descriptionDB: {
        type: String,
        required: true,
    },
    categoryDB: {
        type: String,
        required: true,
    },
    dueDateDB: {
        type: String,
        required: true,
    },
});

//  'Contact' will be name in the database & that 'Contact'  or Collection will be defined in the schema contactSchema

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
