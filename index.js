// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, input) {
    let matchedDrivers = [];
    for (const driver of drivers) {
        if (driver.toLowerCase() === input.toLowerCase()) {
            matchedDrivers.push(driver);
        }
    }
    return matchedDrivers;
}

function fuzzyMatch(drivers, input) {
    return drivers.filter(function (driver) {
        return driver[0] === input[0];
      })
}

function matchName(array, name) {
    return array.filter(function (driver) {
        return driver.name === name;
      })
    
}

