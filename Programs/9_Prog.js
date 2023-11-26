//Q:- Create function using the "function" keyword that takes a
// String as an argument and return the number of vowels in the string.

function countVowel (str){
    // Javascript
    let count = 0;
    for (const char of str){
        if ( char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        { count ++; }
    }

    //console.log(count);
    return count;
}

// with arrow function
const countVow = (str) => {
    let count = 0;
    for (const char of str){
        if ( char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        { count ++; }
    }

    //console.log(count);
    return count;
}
