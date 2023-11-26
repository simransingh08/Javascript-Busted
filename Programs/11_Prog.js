// Q1- We are given array of marks of students. Filter out of the marks of students that scored 90.


let marks = [98,97,64,35,69,86,99,56,19];

let newarray = marks.filter((val) =>
{
    return val >90;
}
);


// Q2- Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all the numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter a Number : ");
let arr = [];
for(let i =1; i<=n; i++)
{
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) =>

{
    return res + curr;
});
console.log("sum", sum);

console.log("Product");
let Multiply = arr.reduce((res, curr) =>

{
    return res * curr;
});
console.log("Multiply", Multiply);

