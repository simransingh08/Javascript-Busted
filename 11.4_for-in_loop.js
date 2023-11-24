// for in loops
// for(let key in objVar){
    // 
//}

let student = {
    name: "Simran Singh",
    age: 20,
    cgpa:7.5,
    ispass: true
};

for (let key in student){
    console.log("key =", key, "Value =", student[key]);
}