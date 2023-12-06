// Q1:-  Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College Students" to this using JS.

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna College Students";




// Q2:- Create 3 divs with common class name - "box". Access them & add some unique of them
let divs = document.querySelectorAll(".box");

// with loop
let idx =1;
for (div of divs){
    div.innerText = `New Unique Value ${idx}`;
    idx++;
}

//without loop

// divs[0].innerText = "New Unique Value 1";
// divs[1].innerText = "New Unique Value 2";
// divs[2].innerText = "New Unique Value 3";

//with index value only
// console.log(divs [0]);
