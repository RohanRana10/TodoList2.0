//require the library
const mongoose = require('mongoose');

//connect to the db
mongoose.connect('mongodb://localhost/todo_list_db');

//acquire the connection if it is successful
const db = mongoose.connection;

//on error
db.on('error',console.error.bind(console,'error connecting to db'));

//else print success messsage
db.once('open',function(){
    console.log('Successfully connected to the db!');
});