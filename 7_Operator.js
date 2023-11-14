// typeof Operator
let age = 22;
let firstname = "Simran";
console.log(typeof age);
console.log(typeof firstname);

//convert number to string
console.log(typeof (age + ""));

//convert string to number
let mystr = +"Simran";
console.log(typeof mystr);

// another way to change number to string and string to number
let newage = "18";
newage = String(newage);
console.log(typeof newage);
newage = Number(newage);
console.log(typeof newage);