// 1. If statement
//ex1;
let age = 25;
if (age>=18)
{
    console.log("You can Vote");
}

//ex2;
let age2 = 16;
if (age2<18)
{
    console.log("You cannot Vote");
}

//ex3;
let mode = "dark";
let color;

if(mode === "dark")
{
    color = "black";
}

if(mode === "light")
{
    color = "light";
}
console.log(color);

// 2. if-else Statement
let appereance = "light";
let color2;

if(appereance === "dark")
{
    color2 = "black";
} else {
    color2 = "white";
}
console.log(color2);

//ex2
let age3 = 25;

if(age3 >= 18)
{
    console.log("Vote");
} else{
    console.log("Not Vote");
}

//ex3 Odd even

// let num = 10;
let num = 5;
if(num%2 === 0)
{
    console.log(num, " is Even");
}else{
    console.log(num, "is Odd");
}

//3. else-if statement
let mode2 = "dark";
// let mode2 = "pink";
let color3;

if(mode2 === "dark")
{
    color3 = "Black";
} else if (mode2 === "blue"){
    color3 = "blue";
}else if (mode2 === "pink"){
    color3 = "pink";
}else {
    color3 = "white";
}
console.log(color3)
   
