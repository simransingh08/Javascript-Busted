// difference between dot and bracket notation

const key = "email";
const simran = {
    name: "Simran Singh",
    age: 23,
    "my hobbies": ["Trying so many things"]
};

// console.log(simran["my hobbies"]);
simran[key] = "simransingh@gmail.com";
console.log(simran);