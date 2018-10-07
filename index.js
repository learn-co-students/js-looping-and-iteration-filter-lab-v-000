// Code your solution in this fil
function findMatching(collection, name){
    let matchedDrivers = [];
    for (const element of collection){
        if (name.toUpperCase() === element.toUpperCase()) {
        matchedDrivers.push(element);
        }
    }
    return matchedDrivers;
}

function fuzzyMatch(collection, name){
    let matchedDrivers = [];
    nameLength = name.length;
    for (const element of collection){
        if (element.startsWith(name)){
            matchedDrivers.push(element);
        }
    }
    return matchedDrivers;
}

function matchName(collection, thename){
    matchedDrivers = [];
    for (const driver of collection){
        if (driver.name === thename){
            matchedDrivers.push({name: driver.name, hometown: driver.hometown});
        }
    }
    return matchedDrivers;
}

