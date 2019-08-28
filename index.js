// Code your solution in this file
function findMatching(collection, driverName) {
    return collection.filter(function(collectionItem) { return collectionItem.toLowerCase() === driverName.toLowerCase(); });
}

function fuzzyMatch(collection, stringToMatch) {
    return collection.filter(function(collectionItem) { return collectionItem.slice(0, stringToMatch.length) === stringToMatch});
}

function matchName(collection, nameToMatch) {
    return collection.filter(function(collectionItem) { return collectionItem.name === nameToMatch; });
}