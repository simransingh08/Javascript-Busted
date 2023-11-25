// PRompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length
// eg: username = :Simransingh", username should be "@simransingh08"

let fullname = prompt("Enter your fullname without space");
let username = "@" + fullname + fullname.length;
console.log(username);
