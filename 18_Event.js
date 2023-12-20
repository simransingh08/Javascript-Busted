// events handler
let btn = document.querySelector("#Btn1");
// btn.onclick = () =>  {
//     console.log("Btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a); 
// };

// events object
btn.onclick = (e) => {
    console.log("Event Object");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log( e.clientX, e.clientY);
    
}

let box = document.querySelector('div');
box.onmouseover = () =>{
    console.log("you are inside div")
};
