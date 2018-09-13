
//Requiring functions to getStoredArticles and to scrapeArticles
const retrieveScraped = require("../public/js/retrieveScraped");
const scrapingTheAtlantic = require("../public/js/scraping");
const deleteAllArticles = require("../public/js/deleteAllArts");
const saveArticle = require("../public/js/saveArticle");
const displaySaved = require("../public/js/displaySaved")

// Routes
// =============================================================
module.exports = function (app) {

    ///////////////////////////////////////////////////////
    //When you visit this route, the server will 
    //use Cherrio to scrape data from the specified site, and then save it to MongoDB.
    app.post("/scrape", function (req, res) {

        scrapingTheAtlantic(res);
        
    })
   ///////////////////////////////////////////////////
    //Route for the homepage
    app.get("/", function(req, res, next){
    console.log("printing on the get '/' routes")

        retrieveScraped(res)
    
    })

    ///////////////////////////////////////////////////
    //Route for the homepage
    app.get("/displaySaved", function(req, res, next){
        console.log("printing on the get '/displaySaved' routes")
    
        displaySaved(res);
        
        })
    ///////////////////////////////////////////////////

    app.post("/deleteAllArticles", function(req, res, next){
        console.log("printing on the deleteAllArticles routes")
    
        deleteAllArticles(res)
        window.location.reload("/")
        
        
        })
    ///////////////////////////////////////////////////
    app.post("/saveArticle/:articleID", function(req, res, next){
        console.log("printing on the saveArticle routes")
        const articleID = req.params.articleID
        console.log(articleID)


        saveArticle(res,req, articleID);
        window.location.reload("/")
    
        
        
        })

}

