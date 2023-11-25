// We are going to learn Some string methods

//trim() , it is using for removing the spaces
let firstname= "   JavaScript   ";
console.log(firstname.length);
firstname.trim(); // because of string is immutable sting will not trim the space

// again we need to declare variable
let newstring = firstname.trim();
console.log(newstring);
console.log(newstring.length);


//toUpperCase(), it will change lowercase to uppercase
console.log(firstname.toUpperCase());

//toLowerCase(), uppercase to lowercase
console.log(firstname.toLowerCase());

// slice(), it will start from start index and end index
console.log(firstname.slice(0,2));

let newstring2 = firstname.slice(0,6);
console.log(newstring2);

//replace,
//str.replace(searchVal, newVal)
let str = "Hello";
console.log(str.replace("H", "Y"));
console.log(str.charAt(3));


