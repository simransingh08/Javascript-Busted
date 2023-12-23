// just creating prototype

const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const MyName = {
    salary: 50000,
};

MyName.__proto__ = employee;