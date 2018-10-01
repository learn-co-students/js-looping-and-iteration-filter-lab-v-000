// Code your solution in this file
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (collection, driver) {
    return collection.filter(function (driverName) { 
        return driverName.toLowerCase() === driver.toLowerCase();
    });
} 
    
function fuzzyMatch (collection, driver) {
    return collection.filter(function (driverName) {
        return driverName.slice(0, 1) === driver.slice(0, 1); 
    });
}

// So fuzzyMatch filters the collection to see how the argument passed through the filter 
// compares with the argument passed through fuzzyMatch (presumably referring to an existing declared object)
//driverName is kind of a proxy for the driver

function matchName (collection, driver) {
    return collection.filter(function (driverName) {
        return driverName.name.toLowerCase() === driver.toLowerCase(); 
    });
}