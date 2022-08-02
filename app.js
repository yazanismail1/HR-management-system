'use strict';

// Generate four digits random number //

// General function to generate a random four digit number 

function generateRandomId() {
    let randomId = Math.floor((Math.random() * 10000) - 1);
    if (randomId < 1000 && randomId >= 100){
        randomId *= 10;
        return randomId;
    } else if (randomId < 100 && randomId >= 10){
        randomId *= 100;
        return randomId;
    } else if (randomId < 10 && randomId >= 1){
        randomId *= 1000;
        return randomId;
    } else if (randomId >= 10000){
        return randomId;
    }
    return randomId;
}

// Generate Employee IDs for task 08

function idNumber(add){
    let startingID = 1000;
    return startingID + add;
}

// Generate a random salary based on employee level //

function generateRandomSalary(employeeLevel) {
    let min = 0;
    let max = 0;
    if (employeeLevel == "Junior") {
        min = 500;
        max = 1000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary;
    } else if (employeeLevel == "Mid-Senior") {
        min = 1000;
        max = 1500;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary;
    } else if (employeeLevel == "Senior") {
        min = 1500;
        max = 2000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary;
    }
    return randomSalary;
}

// Calculating the net salary //

function afterTaxSalary(level) {
    let salary = generateRandomSalary(level);
    let netSalary = Math.floor(salary*0.925);
    return netSalary;
}

// Employees Objects //

// Employee 01 

const firstEmployee = {
    employeeId: function(){return idNumber(0)}, // You can change the inner function to generateRandomId() to get a random ID 
    fullName: "Ghazi Samer",
    department: "Administration",
    level: 'Senior',
    imageUrl: "www.google.com",
    salary: function(){return afterTaxSalary(this.level)},
}

// Employee 02 

const SecondEmployee = {
    employeeId: function(){return idNumber(1)}, // You can change the inner function to generateRandomId() to get a random ID 
    fullName: "Lana Ali",
    department: "Finance",
    level: 'Senior',
    imageUrl: "www.google.com",
    salary: function(){return afterTaxSalary(this.level)},
}

// Employee 03 

const thirdEmployee = {
    employeeId: function(){return idNumber(2)}, // You can change the inner function to generateRandomId() to get a random ID 
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: 'Senior',
    imageUrl: "www.google.com",
    salary: function(){return afterTaxSalary(this.level)},
}

// Employee 04 

const fourthEmployee = {
    employeeId: function(){return idNumber(3)}, // You can change the inner function to generateRandomId() to get a random ID 
    fullName: "Safi Walid",
    department: "Administration",
    level: 'Mid-Senior',
    imageUrl: "www.google.com",
    salary: function(){return afterTaxSalary(this.level)},
}

// Employee 05

const fifthEmployee = {
    employeeId: function(){return idNumber(4)}, // You can change the inner function to generateRandomId() to get a random ID 
    fullName: "Omar Zaid",
    department: "Development",
    level: 'Senior',
    imageUrl: "www.google.com",
    salary: function(){return afterTaxSalary(this.level)},
}

// Employee 06

const sixthEmployee = {
    employeeId: function(){return idNumber(5)}, // You can change the inner function to generateRandomId() to get a random ID 
    fullName: "Rana Saleh",
    department: "Development",
    level: 'Junior',
    imageUrl: "www.google.com",
    salary: function(){return afterTaxSalary(this.level)},
}

// Employee 07

const seventhEmployee = {
    employeeId: function(){return idNumber(6)}, // You can change the inner function to generateRandomId() to get a random ID 
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: 'Mid-Senior',
    imageUrl: "www.google.com",
    salary: function(){return afterTaxSalary(this.level)},
}

// Outputting employees objects //

function outputtingEmployeesObjects(object){
    let name = "Employee name: " + object.fullName;
    let salary = "Employee Salary: " + object.salary();
    console.log(name);
    console.log(salary);
}

outputtingEmployeesObjects(firstEmployee);
outputtingEmployeesObjects(SecondEmployee);
outputtingEmployeesObjects(thirdEmployee);
outputtingEmployeesObjects(fourthEmployee);
outputtingEmployeesObjects(fifthEmployee);
outputtingEmployeesObjects(sixthEmployee);
outputtingEmployeesObjects(seventhEmployee);

