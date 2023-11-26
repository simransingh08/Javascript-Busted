//For a given array of numbers, print the square of each value using the forEach loop.


let arr = [2,8,9,6,7,5];
arr.forEach((arr) => {
    console.log(arr*arr);
});


//another way to perform foreach loop
console.log("Anaother way")
let num = [67,88,950];

let calcSqr = (num) => {
    console.log(num*num);
};
num.forEach(calcSqr);