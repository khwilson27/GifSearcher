$(document).ready(function() {

	var createBtn = function(word) {
		$("<button>").attr("type", "button").addClass("btn btn-info gifBtn").text(word).appendTo($(".buttonDump"))
	};

	$("#searchBtn").on("click", function(){
		var userInput = $("#userInput").val();
		$("#userInput").val("");
		createBtn(userInput);
	});

	$("#clearBtn").on("click", function(){
		$(".buttonDump").empty();
		$("#imgDump").empty();
	});

	$(".buttonDump").on("click", ".gifBtn", function(){
		var searchTerm = $(this).text();
		var url = "http://api.giphy.com/v1/gifs/search?";

        $.ajax({
	        url: url,
	        method: 'GET',
	        data: {
	        	"api_key": "dc6zaTOxFJmzC",
	          	"q": searchTerm,
	          	"limit": "10",
	          	"rating": "g"
	        }
        }).done(function(result) {

	          console.log(result);
	          var data = result.data;

	          var rating = data[0].rating;
	          var urlStill = data[0].rating;
	          var urlAnimate = "";


      	});


	});




	















	






	
    

}) //closing document.ready