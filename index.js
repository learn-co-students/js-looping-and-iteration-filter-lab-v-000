function findMatching(collection, name){
    return collection.filter(function(driver){
        return driver.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(list, partialName){
    let nameLength = partialName.length
    return list.filter(function(driver){
        return driver.slice(0, nameLength) === partialName;
    });
}

function matchName(collection, name){
    return collection.filter(function(driver){
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}