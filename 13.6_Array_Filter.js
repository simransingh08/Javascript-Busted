// filter:-
// Create a new array of elements that give true for a condition/filter.
// Eg: all even elements

let arr = [1,2,3,4,5,6,7,8,9,55,69,556,689,65,74,558];

let newarr = arr.filter((val) => {
    return val % 2 === 0;
}
);

console.log("Even Array");