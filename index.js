// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, str) {
    return drivers.filter(function(name) { return name.toLowerCase() === str.toLowerCase() });
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(function(name) { return name.toLowerCase().indexOf(str.toLowerCase()) === 0 })
}

function matchName(drivers, str) {
    return drivers.filter(function(driver) { return driver.name === str });
}
