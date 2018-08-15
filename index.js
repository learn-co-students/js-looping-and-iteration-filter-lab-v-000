// Code your solution in this file
function findMatching(drivers, name) {
    return drivers.filter(driver => {
       return name.toLowerCase() === driver.toLowerCase()
    });
    }

function fuzzyMatch(drivers, name) {
    return drivers.filter(function(driver) {
        return name[0].toLowerCase() === driver[0].toLowerCase()
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver['name'] === string
    })
}