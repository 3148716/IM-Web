// $(document).ready makes the javascript run when page loads.
$(document).ready(function() {
	var questions = {
		"What is the first colour of the window on refresh?": "cyan",
		"What is the colour after minimizing 4 times, and maximizing 3 times?": 1,
		"What is the colour after maximizing once, and minimizing 3 times?": 2,
		"What is the colour after minimizing 2 times, maximizing 3 times, and minimizing 4 times?": 3,
		"What is the colour after maximizing 5 times?": -5,
		"What is the colour after minimizing 5 times?": 5,
		"What is the colour after minimizing 3 times, and maximizing 6 times?": -3,
		"What is the colour after maximizing 5 times, and minimizing 3 times?": -2,
		"What is the colour after maximizing once?": -1
	};
	var random = Math.floor(Math.random() * (Object.keys(questions).length - 1));
    $('.answer').attr("placeholder", Object.keys(questions)[random]);
    var randomAnswer = questions[Object.keys(questions)[random]];
	// Part of the list your going through (so order stays the same whether your maximizing or minimzing)
	var questionIndex = 0;
	var questionNextIndex = 1;
	var index = 0;
	var nextIndex = 1;
	// List of colours
	var colours = ["#00e6da", "#003dd3", "#ffa1f5", "#ffffff", "#fff05f", "#c73938", "#7b3bcd", "#000000", "#3dc340"];

	var colourToString = {
		"#00e6da": "cyan",
		"#003dd3": "blue",
		"#ffa1f5": "pink",
		"#ffffff": "white",
		"#fff05f": "yellow",
		"#c73938": "red",
		"#7b3bcd": "purple",
		"#000000": "black",
		"#3dc340": "green"
	}

	var answer;

	if (typeof randomAnswer === "string") {
		answer = randomAnswer;
	} else if (index + randomAnswer >= 0) {
		if (index + randomAnswer < colours.length) {
			answer = colourToString[colours[index + randomAnswer]];
		} else {
			answer = colourToString[colours[index + randomAnswer - colours.length]];
		}
	} else {
		answer = colourToString[colours[index + randomAnswer + colours.length]];
	}

	$(".answer").keydown(function(event) {
		if (event.keyCode === 13) {
			if ($('.answer').val() === answer) {
				alert("Congratulations");
				// Play Sound Here
				questionIndex = index;
				questionNextIndex = nextIndex;
				random = Math.floor(Math.random() * (Object.keys(questions).length - 1));
				$('.answer').attr("placeholder", Object.keys(questions)[random]);
				var randomAnswer = questions[Object.keys(questions)[random]];
				if (typeof randomAnswer === "string") {
					answer = randomAnswer;
				} else if (index + randomAnswer >= 0) {
					if (index + randomAnswer < colours.length) {
						answer = colourToString[colours[index + randomAnswer]];
					} else {
						answer = colourToString[colours[index + randomAnswer - colours.length]];
					}
				} else {
					answer = colourToString[colours[index + randomAnswer + colours.length]];
				}
				$('.answer').val("");
			} else {
				alert("Try Again");
				$(".foreground").css("background-color", colours[questionIndex]);
				$(".background").css("background-color", colours[questionNextIndex]);
				index = questionIndex;
				nextIndex = questionNextIndex;
			}
    	}
	});





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










