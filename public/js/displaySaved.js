const articleModel = require("../../models/Article")

module.exports = function retrieveScraped(res){
    articleModel
    .find({ saved: true }, function(err){ if (err) return console.log(err)})
    .then(function(dbArticles) {
      console.log(dbArticles)
      // If all Users are successfully found, send them back to the client
      res.render("savedArticles", {data:dbArticles});
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
};