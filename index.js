// Code your solution in this file

function findMatching(driversArray, nameString) {
    const downcaseName = nameString.toLowerCase();    

    const result = driversArray.filter(driverName => driverName.toLowerCase() === downcaseName);
    return result; 
}

function fuzzyMatch(driversArray, string) {
    const length = string.length; 

    const result = driversArray.filter(driverName => driverName.slice(0, length) === string);
    return result; 
}

function matchName(driversArray, string) {
    const result = driversArray.filter(driverObject => driverObject.name === string); 
    return result; 
}