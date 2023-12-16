let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
console.log(newBtn);

//if we want button on top then use prepend
// let div = document.querySelector("div");
// div.prepend(newBtn);

//if we want button in bottom then use append
// let div = document.querySelector("div");
// div.append(newBtn);

// if we want just before the content then use before
// let div = document.querySelector("div");
// div.before(newBtn);

// if we want just before the content then use before
// let div = document.querySelector("div");
// div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi, I am new in JavaScript! </i>";

document.querySelector("body").prepend(newHeading);


// delete any node with help of this command

let para = document.querySelector("p");
para.remove();

newHeading.remove();


