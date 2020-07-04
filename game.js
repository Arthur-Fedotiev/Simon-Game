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
var clicked = false;


$(document).keydown(function() {
  if (!started) {

    $("#level-title").text("Уровень " + level);
    nextSequence();
    started = true;
  }
  userClickedPattern = [];
});

// Event listener to user's clicks

$(".btn").on("click", function(event) {


  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  // sound & animation
  playSound(userChosenColor);
  animatePress(userChosenColor);


  if (userClickedPattern.length != 0) {

    // if (userClickedPattern[userClickedPattern.length - 1] === gamePattern[userClickedPattern.length - 1]) FIRST VERSION
    if (userChosenColor === gamePattern[userClickedPattern.length - 1]) {

      if (userClickedPattern.length === gamePattern.length) {
        console.log("userPattern BEFORE NULL = " + gamePattern);
        userClickedPattern = [];
        setTimeout(function() {
          nextSequence();
        }, 500);

        console.log("userClickedPattern after NULL =  " + userClickedPattern);
      }
    } else {
      gamePattern = [];
      level = 0;
      $("#level-title").text("Поражение! Нажмите Любую Кнопку для Начала Новой Игры");
      animatedGameOver();
      playSound("wrong");
      started = false;
    }

  }
})


function restart() {
  userPattern = [];
  level = 0;

  console.log("userClickedPattern =  " + userClickedPattern);
  console.log("gamePattern = " + gamePattern);

}

function compareTwoArrays() {
  for (var i = 0; i != gamePattern.length; i++) {
    if (userClickedPattern[i] != gamePattern[i]) {
      return false
    }
  }
  return true
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
  $("#level-title").text("Уровень " + level);
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

function animatedGameOver() {
  $(document.body).addClass("game-over");
  setTimeout(function() {
    $(document.body).removeClass("game-over");
  }, 200);
}
