// Code your solution in this file
function findMatching(collection, name){
    return collection.filter(function (userName) {return userName.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(collection, match){
    return collection.filter(function (item){ return item.startsWith(match)
    });
}

function matchName(collection, name){
    return collection.filter(function (item){
        return item.name === name
    });
}