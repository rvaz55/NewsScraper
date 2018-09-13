//Requiring the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


//Creating the instance of express and 
//storing it in the app variable then naming the port
const PORT = process.env.PORT || 3000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Here I tell Express to use Body-Parser module
//to handle data parsing 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//-----------------------------------------
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//-----------------------------------------

// Requiring our HTML and API routes
//-----------------------------------------
// Requiring our HTML and API routes
require("./controllers/routes")(app);
//require("./controllers/apiRoutes")(app);

//Creating Mongoose connection
//Using 'mongoose.connect()' will create a new mongDB if the specified DB doesn't already exist
mongoose.connect('mongodb://localhost/news_DB');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//The three lines below were taken from the Mongoose documentation
//and either give us a 'error msg' or a 'connected msg + connects to the server'
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    console.log("we're connected!")
    
    //Then we make sure that the server we created is LISTENING 
    app.listen(PORT, function(){
        console.log("Server listening on: http://localhost:" + PORT);
    });
});




