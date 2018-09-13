//Requiring Mongoose
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

//Schema for article objects is created 
//Important note: the name of a required field MUST have a 
//matching name in 'data.push({})' function within the apiRoutes.js'
//For example: within the schema 'title' & 'link' must have
//matching objects called 'title' & 'link' that are defined within the data.push({}) function
let articleSchema = new Schema(
    {   title: {type: String, required: true, unique: true},
        link: {type: String, required: true},
        saved: {type: Boolean, default: false}
         
    }
);

// Create article model from articleSchema
let Article = mongoose.model('Article', articleSchema);

module.exports = Article ;