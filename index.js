// Code your solution in this file

function findMatching(array,name) {
    return array.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(array, letter) {
    let letters = letter.length;
    return array.filter(function (driverName) {
        return driverName.slice(0,letters) === letter;
    });
}

function matchName(array, name) {
    return array.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase()
    })
}