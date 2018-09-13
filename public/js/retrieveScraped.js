const articleModel = require("../../models/Article")

module.exports = function retrieveScraped(res){
    articleModel
    .find({}, function(err){ if (err) return console.log(err)})
    .then(function(dbArticle) {
      //console.log(data)
      // If all Users are successfully found, send them back to the client
      res.render("index", {data:dbArticle});
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
};