// Code your solution in this file
function findMatching(drivers, name){
    return drivers.filter(function (driverName) {return driverName.toUpperCase() === name.toUpperCase();});
}

function fuzzyMatch(drivers, string){
    return drivers.filter(function(driverName) {
        return driverName.slice(0, string.length) === string;
    })
}

function matchName(drivers, string){
    return drivers.filter(function(driver){
        return driver['name'] === string;
    })
}