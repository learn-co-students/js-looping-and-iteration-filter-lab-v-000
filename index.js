function findMatching(drivers, string) {
    return drivers.filter(function (name) {return name.toUpperCase() === string.toUpperCase()})
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (name) { return name.substring(0, 1) === string.substring(0, 1)})
}

function matchName(drivers, string) {
    return drivers.filter(function (driver) { return driver.name.toUpperCase() === string.toUpperCase()})
}

// function matchName(list, name) {
//     return list.filter(function (driver) {return driver.name.toLowerCase() === name.toLowerCase()})
// }