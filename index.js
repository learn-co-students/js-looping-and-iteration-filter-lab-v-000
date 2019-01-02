// Code your solution in this file

function findMatching(list, name) {
   return list.filter(function (driver) { return driver.toUpperCase() === name.toUpperCase();} );
}

function fuzzyMatch(list, name) {
    return list.filter(function(driver) {return driver[0] === name[0];} );
}

function matchName(list, name) {
    return list.filter(function(object) {return object.name === name;} );
}