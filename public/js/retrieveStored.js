const articleModel = require("../../models/Article")

module.exports = function getStoredArticles(res){
    articleModel
    .find({})
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