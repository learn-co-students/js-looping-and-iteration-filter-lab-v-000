// Code your solution in this file
function findMatching(collection,name){
    return collection.filter(element => element.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driver => driver.slice(0,2).toUpperCase() === string.toUpperCase())
}


function matchName(collection,name){
    return collection.filter(element => element.name.toUpperCase() === name.toUpperCase());
}