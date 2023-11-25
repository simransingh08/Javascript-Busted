//1:- Push(): add to end
//2:- pop(): delete from end &return
//3:- to String(): converts array to string

let fooditems = ["potato", "apple", "litchi", "tomato"];
console.log(fooditems);

// with push method
fooditems.push("chips","pizza","paneer");
console.log(fooditems);

// with pop method
let deleteditem = fooditems.pop()
console.log(fooditems);
console.log("deleted",deleteditem);

// with toString method
console.log(fooditems.toString());
console.log(fooditems);
