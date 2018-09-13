
//Requiring functions to getStoredArticles and to scrapeArticles
const getStoredArticles = require("../public/js/retrieveStored")
const scrapingTheAtlantic = require("../public/js/scraping")

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
    console.log("printing on the html routes")

        getStoredArticles(res)
    
    })

    ///////////////////////////////////////////////////
}

