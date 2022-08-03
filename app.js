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

// Generate Employee IDs 

let startingID = 999;
function idNumber(){
    startingID++;
    return startingID;
}

// Generate Employee Salary//

// generate Basic Salary Based on Level

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

// Calculating the net salary 

function afterTaxSalary(level) {
    let salary = generateRandomSalary(level);
    let netSalary = Math.floor(salary*0.925);
    return netSalary;
}

// Employees Constructor, Prototype and Objects //

// Employees Constructor

const allEmployees = [];
function Employee(fullName, department, level, imageUrl){
    this.employeeId = function(){return idNumber()}
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = function(){return afterTaxSalary(this.level)};
    allEmployees.push(this);
}

// Prototype to write in HTML 

Employee.prototype.writeToHTML = function() {
        document.write(
            `<div class="inner-employees-cards-section">
            <div class="test">
            <img src="${this.imageUrl}" alt="employee pfp" />
            </div>
            <p class="employee-name">${this.fullName}</p>
            <p class="employee-id">ID: ${this.employeeId()}</p>
            <p class="to-be-hidden">Department / ${this.department}</p>
            <p class="to-be-hidden">${this.level}</p>
            <p class="to-be-hidden">Salary / ${this.salary()} JD</p>
          </div>`)
    }

// Employees Objects

const ghaziSamer = new Employee("Ghazi Samer", "Administration", "Senior", "./assets/for-hr-management/2.jpg");
const lanaAli = new Employee("Lana Ali", "Finance", "Senior", "./assets/for-hr-management/4.jpg");
const tamaraAyoub = new Employee("Tamara Ayoub", "Marketing", "Senior", "./assets/for-hr-management/3.jpg");
const safiWalid = new Employee("Safi Walid	", "Administration", "Mid-Senior", "./assets/for-hr-management/1.jpg");
const omarZaid = new Employee("Omar Zaid", "Development", "Senior", "./assets/for-hr-management/5.jpg");
const ranaSaleh = new Employee("Rana Saleh", "Development", "Senior", "./assets/for-hr-management/3.jpg");
const hadiAhmad = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "./assets/for-hr-management/5.jpg");

// Outputting employees objects //

for (let i = 0; i < allEmployees.length; i++){
    console.log(`Employee name: ${allEmployees[i].fullName} `);
    console.log(`Department: ${allEmployees[i].department} `);
    console.log("-----------------------");
 }

 // Writing to the HTML //

for (let j = 0; j < allEmployees.length; j++){
    allEmployees[j].writeToHTML();
}
