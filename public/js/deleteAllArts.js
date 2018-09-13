//Requiring the Articles model
const articleModel = require("../../models/Article")

module.exports = function deleteAllArticles(res){
    articleModel
    .deleteMany({}, function(err){ if (err) return console.log(err)})
    .then(function() {
      //console.log(data)
      // If all Users are successfully found, send them back to the client
      res.render("index")
      
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
};
