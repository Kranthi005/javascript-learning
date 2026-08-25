//Creating an HTML Element

let h1Element = document.createElement("h1");
h1Element.textContent = "Hello H1";

console.log(h1Element);

//Appending to an HTML Element
let containerElement = document.getElementById("container");
containerElement.appendChild(h1Element);
