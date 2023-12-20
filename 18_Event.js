// events handler
let btn = document.querySelector("#Btn1");
// btn.onclick = () =>  {
//     console.log("Btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a); 
// };

// events object
// btn.onclick = (e) => {
//     console.log("Event Object");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log( e.clientX, e.clientY);
    
// }

// let box = document.querySelector('div');
// box.onmouseover = () =>{
//     console.log("you are inside div")
// };

// event listener
btn.addEventListener("click", () => {
    console.log("button was clicked - handler1");
});

btn.addEventListener("click", () => {
    console.log("button was clicked - handler2");
});

//remove this button

const handler3 = () => {
    console.log("button was clicked - handler3");
}
btn.addEventListener("click", () => {  
});

btn.removeEventListener("click", handler3);

btn.addEventListener("click", () => {
    console.log("button was clicked - handler4");
});


