// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct values.

let gamenum =27;

let usernum = prompt("Guess the game number :");
//console.log(usernum);

while(usernum != gamenum){
    let usernum = prompt("You entered wrong number. Guess again:");

}
console.log("Congratulation, you entered the right number");