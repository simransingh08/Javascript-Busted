// Reduce:- Performs some operations and reduces the array to a songle value. It returns that single value.

const arr1 = [1,2,3,5];

let arr2 = arr1.reduce((res, curr) =>
{
    return res + curr;
}
);
console.log(arr2);

// finding the largest number from the array

let arr3 = [56,89,54,69,36,889];
console.log("Finding largest Number")
const output = arr3.reduce((prev, curr) =>
{
    return prev > curr ? prev : curr;
}
);
console.log(output);