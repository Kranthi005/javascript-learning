let bgColor = document.getElementById("colorPickerContainer");
let colorName = document.getElementById("selectedColorHexCode");

function changeBgToGreyAndUpdateText() {
  bgColor.style.backgroundColor = "#e0e0e0";
  colorName.textContent = "#e0e0e0";
}

function changeBgToGreenAndUpdateText() {
  bgColor.style.backgroundColor = "#6fcf97";
  colorName.textContent = "#6fcf97";
}

function changeBgToBlueAndUpdateText() {
  bgColor.style.backgroundColor = "#56ccf2";
  colorName.textContent = "#56ccf2";
}

function changeBgToPurpleAndUpdateText() {
  bgColor.style.backgroundColor = "#bb6bd9";
  colorName.textContent = "#bb6bd9";
}
