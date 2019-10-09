var searchTerm = $("#search-input");
var recordTearm = $("#record-input");
var startYear = $("#start-year");
var endtYear = $("#end-year");
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&api-key=syzNvsm0NC1UK1elO1f3RwjryPKtJpEr"; 
$.ajax({
url: queryURL,
method: "GET"
})

//promise to get the response
.then(function(response) {
    console.log(response);
});