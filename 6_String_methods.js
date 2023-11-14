// We are going to learn Some string methods

//trim() , it is using for removing the spaces
let firstname= "   JavaScript   ";
console.log(firstname.length);
firstname.trim(); // because of string is immutable sting will not trim the space

// again we need to declare variable
let newstring = firstname.trim();
console.log(newstring);
console.log(newstring.length);