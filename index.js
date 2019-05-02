function findMatching (collection, driver) {
    return collection.filter( driverName => driverName.toLowerCase() === driver.toLowerCase());
} 
    
function fuzzyMatch (collection, driver) {
    return collection.filter( driverName => driverName.slice(0, 1) === driver.slice(0, 1));
}

function matchName (collection, driver) {
    return collection.filter( driverName => driverName.name.toLowerCase() === driver.toLowerCase());
}