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

function matchName (collection, driver) {
    return collection.filter(function (driverName) {
        return driverName.name.toLowerCase() === driver.toLowerCase(); 
    });
}