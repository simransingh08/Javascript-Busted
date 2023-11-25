// concat(): joins multiple arrays & returns result
// unshift(): add to start
// shift(): delete from start & return
// slice(): return a piece of the array,  slice(startindex, endindex)
// splice(): change original array(add, remove, replace), splice(startindex, delcount, newelement)


// Concat method
let marvelHeros = ["Thor", "Hulk", "Antman", "Batman"];
let dcHeros = ["Spiderman", "Devdas", "VeerZara"];

let Heros = marvelHeros.concat(dcHeros);
console.log(Heros);

// unshift method
marvelHeros.unshift("Javaan", "Pathaan");
console.log(marvelHeros);

// shift method
 let val = marvelHeros.shift()
 console.log("deleted", val);
 console.log(marvelHeros);

 // slice method
 console.log(Heros.slice(1,4));

 //splice method

 let arr = [3,4,5,6,2,21,143,353,565,56];
console.log(arr.splice(2,2,1000,5000));
console.log(arr);
