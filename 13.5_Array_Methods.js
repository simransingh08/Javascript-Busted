// map method

let nums = [67,98,56];
// nums.map ((val) => {
//     console.log(val);
// });

let calSquare = (nums) => {
    console.log (nums * nums);
};

// another way
console.log("Another way");
let newArr = nums.map((val) => {
    return val *val;
});
