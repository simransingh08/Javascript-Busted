// Q:- Create a new button element. Give it a text "Click me", background color of red & text color of white.
//Insert the button as first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText= "Click Me";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
newBtn.style.height = "35px";
newBtn.style.width = "100px"
newBtn.style.fontSize = "16px"
newBtn.style.border = "none";
newBtn.style.borderRadius = "10px";

document.querySelector("body").append(newBtn);

// Q2

let para = document.querySelector("p");
