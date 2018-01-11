// Code your solution in this file
function findMatching(drivers, string) {
    const result = drivers.filter(function(driverName) { return (driverName.toLowerCase() === string.toLowerCase())})
    
    return result 
}


function fuzzyMatch(drivers, string){
    const result = drivers.filter(function(driverName) { return (driverName[0].toLowerCase() == string[0].toLowerCase())})
    return result 
}

function matchName(drivers, string){
    const result = drivers.filter(function(driverName) { return (driverName.name.toLowerCase() == string.toLowerCase())})
    return result 
}