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

// Employees Constructor, Prototype, Objects and Local Storage //

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

// Local Storage

// function saveToLocalStorage() {
//     let stringifiedData = JSON.stringify(allEmployees);
//     localStorage.setItem("Employees", stringifiedData);
// }

// function getData() {
//     let data = localStorage.getItem("Employees");
//     let parseData = JSON.parse(data);
//     if (parseData !== null) {
//         for (let i = 0; i < parseData.length; i++){
//              new Employee(parseData[i].fullName, parseData[i].department, parseData[i].level, parseData[i].imageUrl);
//         }
//     }  
//     renderEmployees();
// }

// Prototype to write to the HTML 

Employee.prototype.writeToHTML = function() {
    let docElement = document.getElementById("employeeCARDmain");

    let firstCont = document.createElement("div");
    firstCont.setAttribute("class", "inner-employees-cards-section");

    let secondCont = document.createElement("div");
    secondCont.setAttribute("class", "test");
    firstCont.appendChild(secondCont);

    let createImg = document.createElement("img");
    createImg.src = `${this.imageUrl}`;
    createImg.alt = `employee pfp`;
    secondCont.appendChild(createImg);

    let employeeNameP = document.createElement("p");
    employeeNameP.setAttribute("class", "employee-name");
    employeeNameP.textContent = `${this.fullName}`;
    firstCont.appendChild(employeeNameP);

    let employeeIdP = document.createElement("p");
    employeeIdP.setAttribute("class", "employee-id");
    employeeIdP.textContent = `ID: ${this.employeeId()}`;
    firstCont.appendChild(employeeIdP);

    let thirdCont = document.createElement("div");
    thirdCont.setAttribute("class", "to-hide");
    firstCont.appendChild(thirdCont);

    let employeeDepartmentP = document.createElement("p");
    employeeDepartmentP.setAttribute("class", "to-be-hidden");
    employeeDepartmentP.textContent = `Department / ${this.department}`;
    thirdCont.appendChild(employeeDepartmentP);

    let employeeLevelP = document.createElement("p");
    employeeLevelP.setAttribute("class", "to-be-hidden");
    employeeLevelP.textContent = `${this.level}`;
    thirdCont.appendChild(employeeLevelP);

    let employeeSalaryP = document.createElement("p");
    employeeSalaryP.setAttribute("class", "to-be-hidden");
    employeeSalaryP.textContent = `Salary / ${this.salary()} JD`;
    thirdCont.appendChild(employeeSalaryP);
    
    let employeeDeprtmentsAdministration = document.getElementById("administration");
    let employeeDeprtmentsDevelopment = document.getElementById("development");
    let employeeDeprtmentsFinance = document.getElementById("finance");
    let employeeDeprtmentsMarketing = document.getElementById("marketing");
    
     if (this.department == "Administration"){
        let finalDestination = docElement.appendChild(firstCont);
        employeeDeprtmentsAdministration.appendChild(finalDestination);
     } else if (this.department == "Development") {
        let finalDestination = docElement.appendChild(firstCont);
        employeeDeprtmentsDevelopment.appendChild(finalDestination);
     } else if (this.department == "Finance") {
        let finalDestination = docElement.appendChild(firstCont);
        employeeDeprtmentsFinance.appendChild(finalDestination);
     } else if (this.department == "Marketing") {
        let finalDestination = docElement.appendChild(firstCont);
        employeeDeprtmentsMarketing.appendChild(finalDestination);
     }

}

// Employees Objects Static Objects

const ghaziSamer = new Employee("Ghazi Samer", "Administration", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Hadi.jpg?raw=true");
const lanaAli = new Employee("Lana Ali", "Finance", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Lana.jpg?raw=true");
const tamaraAyoub = new Employee("Tamara Ayoub", "Marketing", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Tamara.jpg?raw=true");
const safiWalid = new Employee("Safi Walid	", "Administration", "Mid-Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Safi.jpg?raw=true");
const omarZaid = new Employee("Omar Zaid", "Development", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Omar.jpg?raw=true");
const ranaSaleh = new Employee("Rana Saleh", "Development", "Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Tamara.jpg?raw=true");
const hadiAhmad = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Hadi.jpg?raw=true");

 // Creating new employee object when submitting the form

 let form = document.getElementById("newEmployeeForm");
 form.addEventListener("submit", handleSubmit)

 function handleSubmit(event) {
    event.preventDefault();

    let fullName = event.target.fullName.value;
    let departments = event.target.departments.value;
    let levels = event.target.levels.value;
    let imgURL = event.target.imgURL.value;

    let newEmployee = new Employee(fullName, departments, levels, imgURL); 
    newEmployee.writeToHTML();
    form.reset();
 }

// Console logging employees objects //

for (let i = 0; i < allEmployees.length; i++){
    console.log(`Employee name: ${allEmployees[i].fullName} `);
    console.log(`Department: ${allEmployees[i].department} `);
    console.log(`Employee salary: ${allEmployees[i].salary()} `);
    console.log("-----------------------");
 }

 // Writing to the HTML //
function renderEmployees() {
for (let j = 0; j < allEmployees.length; j++){
    allEmployees[j].writeToHTML();
};
}

renderEmployees();