//Requiring models for retreiving articles, saved articles/notes
//const db = require("")

module.exports = function(app) {

    //Route for the homepage
    app.get("/", function(req, res, next){
        console.log("printing on the html routes")
        console.log(res)
       res.render("index", {data: res});
    })

};