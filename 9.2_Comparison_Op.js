
let a = 5;
let b = 6;

console.log("a == b", a == b);
console.log("a != b", a != b);


let c = 2;
let d = 2;
console.log("c == d", c == d);

//here, == only checking the variable and if datatype is interger then fine
// if suppose datatype is string then it will emplicitly covert string to number
// then it will print the output in integer formate
let e = 5; //number
let f = "5"; //string -> number
console.log("e == f", e == f); 

//here, === will check variable datatype and variable also, if datatype is not
// matching then it will not convert

let g = 8;
let h = "9";
console.log("g === h", g === h);

let aa = 5;
let bb = '5';
console.log(aa !== bb); // true

let a2 = 10;
let b2 = 5;
console.log(a2 > b2); // true

let a3 = 10;
let b3 = 5;
console.log(a3 < b3); // false

let a4 = 10;
let b4 = 10;
console.log(a4 >= b4); // true

let a5 = 5;
let b5 = 10;
console.log(a5 <= b5); // true








