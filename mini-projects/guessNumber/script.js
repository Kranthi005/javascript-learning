"use strict";

// This generates a random number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Variables for the score and highScore
let score = 20;
let highScore = 0;

//Funtion fot the displayMessage
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Main game logic
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = document.querySelector(".guess").value;

  if (!guessNumber) {
    displayMessage("⛔️ No number!");
  } else if (guessNumber == secretNumber) {
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessNumber != secretNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber ? "📈 Too high!" : "📉 Too low!",
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Logic for the Again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
