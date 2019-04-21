// Code your solution in this file
function findMatching(drivers, name) {
    return drivers.filter(function (drName) {
        return drName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, letters) {
    let lengthOfName = letters.length;
    return drivers.filter(function (driver) {
        return driver.slice(0, lengthOfName) === letters; 
    })
}

function matchName(drivers, name) {
    return drivers.filter(function (obj) {
        return obj['name'] === name;
    });
}