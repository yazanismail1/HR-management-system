// Employees Objects //

// Employee 01 //

const firstEmployee = {
    employeeId: 1,
    fullName: a,
    department: a,
    level: s,
    imageUrl: www,
    salary: www,
}



// Generate four digits random number //

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
}

// Calculating the net salary //

function netSalary(employeeLevel) {
    let salary = generateRandomSalary(employeeLevel);
    let netSalary = Math.floor(salary*.925);
    return console.log(netSalary);
}

netSalary("Junior");

console.log("ehy");















// CONVERT THE console.log() TO return //