"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");

//The querySelector only selects the first of the many elements with same class name
//So we use querySelectorAll to make them as arrya

const btnOpenModel = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnOpenModel.length; i++) {
  //Adding a event listener
  btnOpenModel[i].addEventListener("click", function () {
    //The class should pass with out the .
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
