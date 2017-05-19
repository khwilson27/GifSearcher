$(document).ready(function() {

	// initial buttons
	var topics = ['australian shepherd', 'corgi', 'poodle', 'shiba inu', 'malamute', 'samoyed', 'mountain dog'];

	// creates and appends a button
	var createBtn = function(word) {
		$("<button>").attr("type", "button").addClass("btn btn-info gifBtn").text(word).appendTo($(".buttonDump"))
	};

	// create a button for each item in the topics array
	var topicBtn = function() {
		for (var i = 0; i < topics.length; i++) {
			createBtn(topics[i]);
		}
	};

	topicBtn();

	// takes user input from form and creates a button with that word
	$("#searchBtn").on("click", function(){
		var userInput = $("#userInput").val();
		$("#userInput").val("");

		if (userInput){
			createBtn(userInput);
		} else {
			alert("Invalid input!");
		}
	});

	// clears all buttons and images
	$("#clearBtn").on("click", function(){
		$(".buttonDump").empty();
		$("#imgDump").empty();
	});

	// appends 10 gifs of the search term onto the page
	$(".buttonDump").on("click", ".gifBtn", function(){
		var limit = "10";
		var searchTerm = $(this).text();
		var url = "https://api.giphy.com/v1/gifs/search?";

        $.ajax({
	        url: url,
	        method: 'GET',
	        data: {
	        	"api_key": "dc6zaTOxFJmzC",
	          	"q": searchTerm,
	          	"limit": limit,
	          	"rating": "pg-13"
	        }
        }).done(function(result) {

	          console.log(result);
	          var data = result.data;

	          for (var i = 0; i < limit; i++) {
		          var rating = data[i].rating;
		          var urlAnimate = data[i].images.original.url;
		          var urlStill = data[i].images.original_still.url;

		          var newDiv = $("<div>").addClass("gifDiv");
		          var newImg = $("<img>").addClass("gifImg").attr("src", urlStill);
		          	  newImg.data("status", "still").data("urlStill", urlStill).data("urlAnimate", urlAnimate).appendTo(newDiv);
		          var newRatingP = $("<p>").addClass("rating").text("rating: " + rating).appendTo(newDiv);

		          $("#imgDump").prepend(newDiv);
	     	  }
      	});
	});

	// toggles gif from between still and animated
	$("#imgDump").on("click", ".gifImg", function(){

		var status = $(this).data("status");

		if (status == "still") {
			$(this).data("status", "animated");
			$(this).attr("src", $(this).data("urlAnimate"));
		} else {
			$(this).data("status", "still");
			$(this).attr("src", $(this).data("urlStill"));
		}
		
	});















	






	
    

}) //closing document.ready
