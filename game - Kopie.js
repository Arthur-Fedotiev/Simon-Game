// Array that contains game random sequence
var gamePattern = [];

// Array that contains user's answers
var userClickedPattern = [];

// Arra with colors of the buttons
var buttonColors = [
  "red",
  "blue",
  "green",
  "yellow"
];
var level = 0;
var started = false;

$(document).keydown(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


// Event listener to user's clicks
$(".btn").on("click", function(event) {

  // Saving user answers
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  // c
  playSound(userChosenColor);
  animatePress(userChosenColor);

  // console.log(userClickedPattern);
})

for (i = 0; userClickedPattern[i] === gamePattern[i]; ++i) {
  nextSequence();  
  }




//Random game sequence generator
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  // Sound and Animation when new color occurs in the game
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  level = level + 1;
  $("#level-title").text("Level " + level);
  console.log(gamePattern);
}

// Musik function
function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

// Animation function
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


// function playSound(name) {
//   switch (name) {
//     case "blue":
//       var blue = new Audio("sounds/blue.mp3");
//       blue.play();
//       break;
//     case "green":
//       var green = new Audio("sounds/green.mp3");
//       green.play();
//       break;
//     case "red":
//       var red = new Audio("sounds/red.mp3");
//       red.play();
//       break;
//     case "yellow":
//       var yellow = new Audio("sounds/yellow.mp3");
//       yellow.play();
//       break;
//     default:
//       console.log("error");
//   }
//
// }
