//require express
const express = require('express');

const app = express();

//create port
const port = 8000;

//set view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');

//use static files
app.use(express.static('assets'));

//use form data sent by post
app.use(express.urlencoded());   

app.get("*", (req, res) => {
    res.status(500).send("Page not found");
});

//use the router
app.use('/',require('./routes/index'));

//create port listener
app.listen(port,function(err){
    if(err){
        console.log('Error running the server!',err);
    }
    console.log('My server is running on port:',port);
});