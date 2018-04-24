
function findMatching(list, name) {
    return list.filter(function (driverName) {
       return driverName.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(array, partialName) {
    return array.filter(function (name) {
        return partialName === name.slice(0, partialName.length)
    })
}

function matchName(collection, name) {
    return collection.filter(function (collectionName) {
        return collectionName.name === name
    })    
}