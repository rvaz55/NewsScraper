//Code for the 'on-click' functions and the routes 
//these actions should trigger

$(document).ready(function() {

    $("#scrapingBTN").on("click", function(event) {
        event.preventDefault()
        console.log("btn was clicked")
        $.post("/api/scrape", function(data) {
        console.log("printing here")

        })
        .then(function() {
            window.location.href = ("/")
        })
        .catch(function(err) {
            console.log(err);
        });
    });

});