const articleModel = require("../../models/Article")
//const savedModel = require("../../models/savedModel")


module.exports = function saveArticle(res, req, articleID){

    articleModel
     .findOneAndUpdate({_id: articleID}, { $set: { saved: true }},function(err, data){ 
         if (err) return console.log(err)
         //console.log(data)
     })
     .then(function(dbArticles) {
       console.log(dbArticles)

     })
     .catch(function(err) {
       // If an error occurs, send the error back to the client
       res.json(err);
     });
};