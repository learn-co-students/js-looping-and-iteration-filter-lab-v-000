// Code your solution in this file
function findMatching(collection, name) {
    return collection.filter(function (driver) {return driver.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(collection, query) {
    return collection.filter(function(driver) { return driver.slice(0, query.length) === query });
}

function matchName(collection, name) {
    return collection.filter(function(obj) { return obj.name === name });
}