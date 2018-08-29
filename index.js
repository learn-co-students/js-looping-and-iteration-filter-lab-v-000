// Code your solution in this file
function findMatching (collection, name) {
    return collection.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(collection, letter) {
   return collection.filter(function (driverName) { return driverName.slice(0, letter.length) === letter;
    });
}

function matchName(collection, name) {
    return collection.filter(function (driverName) { return driverName.name === name;
    })
}