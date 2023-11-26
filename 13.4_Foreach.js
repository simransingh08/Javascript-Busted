// foreach loop is mostly using with array

//let arr = [1,2,3,4,5,6,89,8];
 let arr = ["Pune", "Delhi", "TajMahal"];

arr.forEach ((val, idx, arr) =>{
    console.log(val.toUpperCase(), idx, arr);
    //console.log(val.toLocaleLowerCase());
    //console.log(val.toLocaleUpperCase());
});