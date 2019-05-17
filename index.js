// Code your solution in this file
function findMatching (drivers, name) {
    return drivers.filter(driverName => driverName.toLowerCase().includes(name.toLowerCase()))
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter((driver) => driver.startsWith(letters))
}

function matchName(drivers, name) {
    return drivers.filter((driver) => driver.name === name)

}