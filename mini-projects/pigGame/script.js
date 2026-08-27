const playerOneScore = document.querySelector("#score--0");
const playerTwoScore = document.querySelector("#score--1");

const playerOneBackground = document.querySelector(".player--0");
const playerTwoBackground = document.querySelector(".player--1");

const diceImage = document.querySelector(".dice");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");

const score = [0, 0];

let currentPlayer = 0;
let currentScore = 0;

// Initial state
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
diceImage.classList.add("hide");

function switchPlayer() {
  currentPlayer = currentPlayer === 0 ? 1 : 0;

  playerOneBackground.classList.toggle("player--active");
  playerTwoBackground.classList.toggle("player--active");
}

function resetCurrentScore() {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
}

// ROLL DICE
buttonRoll.addEventListener("click", function () {
  const randomDiceNumber = Math.floor(Math.random() * 6) + 1;

  diceImage.classList.remove("hide");
  diceImage.src = `assets/dice-${randomDiceNumber}.png`;

  if (randomDiceNumber !== 1) {
    currentScore += randomDiceNumber;

    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    resetCurrentScore();
    switchPlayer();
  }
});

// HOLD
buttonHold.addEventListener("click", function () {
  score[currentPlayer] += currentScore;

  document.getElementById(`score--${currentPlayer}`).textContent =
    score[currentPlayer];

  // Check winner BEFORE switching player
  if (score[currentPlayer] >= 100) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add("player--winner");

    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.remove("player--active");

    return;
  }

  resetCurrentScore();
  switchPlayer();
});
