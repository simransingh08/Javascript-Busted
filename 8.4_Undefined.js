// undefined string 

let firstname;
console.log(typeof firstname);

//null means nothing
let myvar = null;
console.log(myvar);
myvar = "simran";
console.log(myvar, typeof myvar);
console.log (typeof null);// this will print object but it is not a object , this is javascript bug

//BigInt, it is using for big integer because js having limitation for maximum integer
// but BigInt solving this issue for without having any limitation for integer
let mynumber = 123;
console.log(mynumber);
console.log(Number.MAX_SAFE_INTEGER);// this is maximum integer

//with BigInt
let yournum = BigInt(12);//1 way how to use Bigint
let samemynum = 1234n;
console.log(yournum);
console.log(samemynum);

// we can operation also
console.log(yournum+samemynum);