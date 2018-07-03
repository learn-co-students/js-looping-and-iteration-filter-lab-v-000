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
        if (driver.slice(0, partNameLength) === partName) {
            return driver
        }
    })
}

function matchName(drivers, matName) {
    return drivers.filter(function(driverObj) {
        for (const name in driverObj) {
            if (matName === driverObj[name]) {
                return matName
            }
        }
    })
}
