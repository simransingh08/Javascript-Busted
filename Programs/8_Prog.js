// Q:- Create an array to store companies-> "Bloomberg","Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let comapnies = ["Bloomberg","Microsoft", "Uber", "Google", "IBM", "Netflix"];
//comapnies.shift();
// comapnies.splice(2,1,"Ola");
comapnies.push("Amazon");
console.log(comapnies);