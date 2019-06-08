// Code your solution in this file
function findMatching(drivers, string) {
    return drivers.filter(function (element) { return element.toLowerCase() === string.toLowerCase() }); 
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (element) { return element.slice(0, string.length) === string })
}

function matchName(drivers, string) {
    return drivers.filter(function (object) { return object["name"] === string });
}