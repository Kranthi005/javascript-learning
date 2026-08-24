const puppyImage = document.getElementById("puppyImage");
const likeButton = document.getElementById("likeButton");
const likeIcon = document.getElementById("likeIcon");
let isImageLiked = false;

function onClickLikeButton() {
  if (isImageLiked === false) {
    puppyImage.src =
      "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
    likeIcon.style.color = "#0967d2";
    likeButton.style.backgroundColor = "#0967d2";
    likeButton.style.color = "#ffffff";
    isImageLiked = true;
  } else {
    puppyImage.src =
      "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
    likeIcon.style.color = "#cbd2d9";
    likeButton.style.backgroundColor = "#cbd2d9";
    likeButton.style.color = "#9aa5b1";
    isImageLiked = false;
  }
}
