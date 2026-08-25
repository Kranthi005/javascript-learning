let imageSize = document.getElementById("image").style.width;
document.getElementById("imageWidth").textContent = imageSize;

function decrement() {
  document.getElementById("image").style.width = `{imageSize}px`;
}

function increment() {
  document.getElementById("image").style.width = "1000px";
}
