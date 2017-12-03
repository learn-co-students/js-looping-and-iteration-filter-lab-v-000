function findMatching(array, string) {
    return array.filter(function (driver) {
        return driver.toLowerCase() === string.toLowerCase();
    })
}

function fuzzyMatch(array, string) {
    return array.filter(function (driver) {
        return driver.slice(0, string.length) === string
    })
}

function matchName(array, string) {
    return array.filter(function (driver) {
        return driver.name === string;
    })
}