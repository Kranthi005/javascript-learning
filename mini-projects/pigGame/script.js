let playerOneScore = document.querySelector("#score--0");
let playerTwoScore = document.querySelector("#score--1");
const currentOneScore = document.querySelector("#current--0");
const currentTwoScore = document.querySelector("#current--1");

let diceImage = document.querySelector(".dice");
let buttonNew = document.querySelector(".btn--new");
let buttonRoll = document.querySelector(".btn--roll");
let buttonHold = document.querySelector(".btn--hold");

playerOneScore.textContent = "0";
playerTwoScore.textContent = "0";
diceImage.classList.add("hide");

let currentScore = 0;

buttonRoll.addEventListener("click", function () {
  let randomDiceNumber = Math.floor(Math.random() * 6) + 1;

  diceImage.classList.remove("hide");
  diceImage.src = `assets/dice-${randomDiceNumber}.png`;

  if (randomDiceNumber != 1) {
    currentScore += randomDiceNumber;
    currentOneScore.textContent = currentScore;
  } else {
  }
});
