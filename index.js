function findMatching(drivers, name){
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(drivers, string){
    return drivers.filter(function(driver) {
        return driver.slice(0,string.length).toLowerCase() === string.toLowerCase();
    })
}

function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver.name.toLowerCase() === name.toLowerCase();
    })
}