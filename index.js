// Code your solution in this file
function findMatching(drivers, string) {
    return drivers.filter( driver => {
        return driver === string[0].toUpperCase() + string.slice(1) || driver === string[0].toLowerCase() + string.slice(1)
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( driver => {
        return driver.startsWith(string)
    })
}

function matchName(drivers, name) {
    return drivers.filter( driver => {
        return driver.name === name
    })
}
