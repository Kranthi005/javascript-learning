let movieTitle = document.getElementById("titleInput");

let movieReview = document.getElementById("reviewTextarea");

let displayMovieTitle = document.getElementById("reviewsContainerHeading");

let displayMovieReview = document.getElementById("reviewsContainerParagraph");

function add() {
    displayMovieTitle.textContent = movieTitle.value;
    displayMovieReview.textContent = movieReview.value;
}