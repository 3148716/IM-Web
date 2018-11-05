// $(document).ready makes the javascript run when page loads.
$(document).ready(function() {
	// Part of the list your going through (so order stays the same whether your maximizing or minimzing)
	var index = 0;
	var nextIndex = 1;
	// List of colours
	var colours = ["#00e6da", "#003dd3", "#ffa1f5", "#ffffff", "#fff05f", "#c73938", "#7b3bcd", "#000000", "#3dc340"];

	// When you click on the minimize button
	$(".min_icon").click(function() {





		// Disable buttons to prevent glitchy things
		$(".min_icon").attr("disabled", true);
		$(".max_icon").attr("disabled", true);
		// Minimize the foreground (front div layer)
		$(".foreground").css("transition", "transform .5s");
		$(".foreground").css("transform", "scale(0, 0)");
		// Increment the part of the list you are going through so you can get to the next colour
		if (index < colours.length - 2) {
			index++;
			nextIndex++;
		}
		// If its the second last one in the list loop nextIndex back to front
		else if (index === colours.length - 2) {
			index++;
			nextIndex = 0;
		}
		// If its the last one in the list loop back to front
		else {
			index = 0;
			nextIndex++;
		}
		// Javascript doesn't exactly run in order, so we set a timeout here to run 1.1 seconds later because the animation lasts 1 second
		setTimeout(function() {
			// Change the foregrounds colour to the same layer as the background colour (you don't see this because foreground is minimized)
			$(".foreground").css("background-color", colours[index]);
			// Maximize the foreground again (also don't see this step, because the foreground is the same colour as the background now)
			$(".foreground").css("transition", "transform 0s");
			$(".foreground").css("transform", "");
			// Set the background colour to the next colour (so when you minimize you will see the next background colour)
			$(".background").css("background-color", colours[nextIndex]);
			// Reenable the buttons so they can be used again.
			$(".min_icon").removeAttr("disabled");
			$(".max_icon").removeAttr("disabled");
		}, 550);
	});

	// Slightly different for maximizing but the same general idea
	$(".max_icon").click(function() {
		// Disable buttons to prevent glitchy things
		$(".min_icon").attr("disabled", true);
		$(".max_icon").attr("disabled", true);
		// Set the background to the current colour (don't actually see this, since you see the foreground at this point)
		$(".background").css("background-color", colours[index]);
		// Minimize the foreground with no animation (you don't see this step because at this point the background is the same colour as the foreground)
		$(".foreground").css("transition", "transform 0s");
		$(".foreground").css("transform", "scale(0, 0)");
		// Decrement the part of the list so you can get to the previous colour
		if (index === colours.length - 1) {
			index--;
			nextIndex = colours.length - 1;
		}
		else if (index > 0) {
			index--;
			nextIndex--;
		}
		// If its the first item in the list loop back to the end
		else {
			index = colours.length - 1;
			nextIndex--;
		}
		// Set a timeout for the maximization animation to run after all the previous stuff has run
		setTimeout(function() {
			// Change foreground colour to previous colour (you don't see this because the foreground is minimized)
			$(".foreground").css("background-color", colours[index]);
			// Maximize the foureground
			$(".foreground").css("transition", "transform .5s");
			$(".foreground").css("transform", "scale(1, 1)");
		}, 100);
		// Reenable buttons after everything finishes
		setTimeout(function() {
			$(".min_icon").removeAttr("disabled");
			$(".max_icon").removeAttr("disabled");
		}, 550);
	})

});








// // Making random question appear on load
// $(function(){
//     var random = Math.floor(Math.random() * $('.colour').length);
//     $('.colour').eq(random).show();    
// });



// // Enabling answer submission with enter key
// $(document).ready(function() {
//   $('.colour').keydown(function(event) {
//     // Enter keyCode = 13,
//     if (event.keyCode == 13) {
//       this.form.submit();
//       return false;
//     }
//   });

// });




// //quiz
// function form(){
// 	var cyan = document.getElementById("#00e6da").value;
// 	var blue = document.getElementById("#003dd3").value;
// 	var pink = document.getElementById("#ffa1f5").value;
// 	var white = document.getElementById("#ffffff").value;
// 	var yellow = document.getElementById("#fff05f").value;
// 	var red = document.getElementById("#c73938").value;
// 	var purple = document.getElementById("#7b3bcd").value;
// 	var black = document.getElementById("#000000").value;
// 	var green = document.getElementById("#3dc340").value;

// 	var cyan_ans = cyan;
// 	var blue_ans = blue;
// 	var pink_ans = pink;
// 	var white_ans = white;
// 	var yellow_ans = yellow;
// 	var red_ans = red;
// 	var purple_ans = purple;
// 	var black_ans = black;
// 	var green_ans = green;

// 		$("form").click(function(){
// 			if ($("input[type=text]").val()==cyan_ans){
// 				alert("Correct!");
// 			}
// 			else {
// 				alert("Try Again");
// 			}
// 		});

// }








