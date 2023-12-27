const arr  = [5,1,3,2,6];

//filter odd values

function isOdd(x){
    return x%2;
}

const output = arr.filter(isOdd);
console.log(output);

// filter Even Values
function isEven(x){
    return x%2 === 0;
}

const outputeve = arr.filter(isEven);
console.log(outputeve);

// filter Even Values
//we can pass function in higherOrder function style also
const greater = arr.filter(function isgreaterThan4(x){
    return x>4;
});
console.log(greater);

//filter less than
// we can use arrow function for filtring
const less = arr.filter((x) => x<5);
console.log(less);