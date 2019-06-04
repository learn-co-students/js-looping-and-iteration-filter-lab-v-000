// Code your solution in this file


function findMatching(drivers, string) {
    const matches = []
    for (const driver of drivers) {
        if (driver.toLowerCase() === string.toLowerCase()) {
            matches.push(driver)
        }
    }
    return matches
}


function fuzzyMatch(drivers, partName) {
    const partNameLength = partName.length;
    return drivers.filter(function(driver) {
        return driver.slice(0, partNameLength) === partName
    })
}

function matchName(drivers, matName) {
    return drivers.filter(function(driverObj) {
        for (const name in driverObj) {
            return matName === driverObj[name]
        }
    })
}
