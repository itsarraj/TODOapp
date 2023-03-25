const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

const db = require('./config/mongoose');
const Todo = require('./models/todo');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());
app.use(express.static('assets'));
app.use('/', require('./routes'));

// app.get('/', function (req, res) {
//     //  {} query parameters
//     Contact.find({}, function (err, contacts) {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         return res.render('contact', {
//             title: 'Contact_List',
//             contact_list: contacts,
//         });
//     });
// });

// app.post('/create-contact', function (req, res) {
//     // contactList.push(req.body); // contact list pushed in array

//     // Contact list pushed in database
//     Contact.create(
//         {
//             name: req.body.name,
//             phone: req.body.phone,
//         },
//         function (err, newContact) {
//             if (err) {
//                 console.log('error in creating a contact :', err);
//                 return;
//             }
//             console.log('**********', newContact);
//             return res.redirect('back');
//         }
//     );
// });

// // <-- { For DELETING a CONTACT } -->
// app.get('/delete-contact/', function (req, res) {
//     // get the id from query in the url
//     let id = req.query.id;

//     //find the contact in the database using id and delete it
//     Contact.findByIdAndDelete(id, function (err) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         return res.redirect('back');
//     });
// });

// fire up the server
app.listen(port, function (err) {
    if (err) {
        console.log(`Error running server: ${err}`);
    }
    console.log(`Server running on port ${port}`);
});
