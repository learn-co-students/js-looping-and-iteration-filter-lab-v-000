// Code your solution in this file
function findMatching(drivers,str) {
    return drivers.filter(function(e) {return e.toUpperCase() === str.toUpperCase()} );
}

function fuzzyMatch(drivers,str) {
    return drivers.filter(function(e) {return e[0].toUpperCase() === str[0].toUpperCase()} );
}

function matchName(drivers,str) {
    return drivers.filter(function(e) {return e.name.toUpperCase() === str.toUpperCase()} );
}