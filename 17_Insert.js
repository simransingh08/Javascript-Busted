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
let div = document.querySelector("div");
div.after(newBtn);

