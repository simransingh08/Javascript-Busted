// template string

let age = 22;
let firstname = "Simran";

// without template string using
let aboutMe = "My name is " + firstname + "and my age is" + age;
console.log(aboutMe);

// with template string
let aboutme = `My name is ${firstname} and my age is ${age}`;
console.log(aboutme);