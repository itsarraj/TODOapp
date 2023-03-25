const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    dueDate: {
        type: String,
        required: true,
    },
});

//  'Contact' will be name in the database & that 'Contact'  or Collection will be defined in the schema contactSchema

todo = mongoose.model('todo', todoSchema);

module.exports = todo;
