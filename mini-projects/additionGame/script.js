let firstRandomNumber = Math.floor(Math.random() * 100) + 1;
let secondRandomNumber = Math.floor(Math.random() * 100) + 1;
let inputNumber = document.getElementById("userInput").value;

document.getElementById("firstNumber").textContent = firstRandomNumber;
document.getElementById("secondNumber").textContent = secondRandomNumber;
let ans = firstRandomNumber + secondRandomNumber;

function check() {
  let inputNumber = Number(document.getElementById("userInput").value);

  if (ans !== inputNumber) {
    document.getElementById("gameResult").textContent = "Please Try Again";
  } else {
    document.getElementById("gameResult").textContent =
      "Congratulations You got it right";
  }
}

function restart() {
  document.getElementById("firstNumber").textContent = null;
  document.getElementById("secondNumber").textContent = null;
  document.getElementById("gameResult").textContent = null;
}
