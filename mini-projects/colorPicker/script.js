let bgColor = document.getElementById("colorPickerContainer");
let colorName = document.getElementById("selectedColorHexCode");

function changeBgToGreyAndUpdateText() {
  bgColor.style.backgroundColor = "#e0e0e0";
  colorName.textContent = "#e0e0e0";
}
