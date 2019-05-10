// Code your solution in this file
function findMatching(drivers, value) {
    return drivers.filter(function(name) {
        return name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    })
  }

function fuzzyMatch(drivers, value) {
    return drivers.filter(function(name) {
        return name.slice(0, value.length).toLowerCase() === value.toLowerCase()
    })
}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name.toLowerCase() === name.toLowerCase()
    })
}
