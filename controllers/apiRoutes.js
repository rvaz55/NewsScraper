// Our scraping tools
const request = require("request");
const cheerio = require("cheerio");

//Requiring our models
//After retrieving articles, the articles will be saved into the DB
const articleModel = require("../models/Article")

// Routes
// =============================================================
module.exports = function (app) {

    //Function to create a new article object is separated because
    //allows the function to be resused in multiple places just by calling
    //the function as opposed to having to re-write the entire code block

    function scrapingTheAtlantic(res) {
        request("https://www.theatlantic.com/", function (error, response, html) {

            if (error) throw error; 

            const $ = cheerio.load(html);
            const data = []

            //Targeting every 'o-hed' element
            //Within that element,the title and other info will be 'grabbed'
            //and pushed to the results arr
            $(".o-hed").each(function (i, element) {
                const title = $(element).text();
                const link = $(element).children().attr("href");
                
                //const data = []

                //This 'if' block prevents tags with 'undefined' attributes from traveling to the
                //'db.article()' model and becoming an 'article' objects
                if (title && link !== undefined) {
                //results.push({
                data.push({
                    title: title,
                    link: link
                    })
                }
                //console.log("this is the data object")
                //console.log(data)

                //console.log("this is the results object:")
                //console.log(results)
                articleModel
                     .create(data)
                     .then(function(dbArticle) {
                        console.log("this is dbArticle")
                        console.log(dbArticle)
                        console.log("Saved article in Mongodb!");
                     })
                     .catch(function(err) {
                       //console.log(dbArticle)
                       console.log("An error occurred attempting to save the article.")
                     })
            })
            // console.log('this is the res.render---')
            // console.log(res.render);
            // res.render('sample')
        })
    };

    function getStoredArticles(){
        articleModel
        .find({})
        .then(function(dbArticle) {
          //console.log(data)
          // If all Users are successfully found, send them back to the client
          res.json("index", {data:dbArticle});
        })
        .catch(function(err) {
          // If an error occurs, send the error back to the client
          res.json(err);
        });
    };

    ///////////////////////////////////////////////////////
    //When you visit this route, the server will 
    //use Cherrio to scrape data from the specified site, and then save it to MongoDB.
    app.post("/api/scrape", function (req, res) {

        scrapingTheAtlantic(res);
        //res.json()

    })
   ///////////////////////////////////////////////////
   app.get("/api/getStored", function (req, res) {

        getStoredArticles();
        
    })

    ///////////////////////////////////////////////////
}

