function findMatching(drivers, wanted) {
    let result = drivers.filter(driver => driver.toLowerCase() === wanted.toLowerCase());
    return result;
}

function fuzzyMatch(drivers, str) {
    let letters = ""
    let matches = [];
    drivers.filter(function(driver) {
        for (i = 0; i < str.length - 1; i++) {
            if (driver[i] === str[i] ) {
              matches.push(driver)
            }
        }
    } )
    return matches;
}

function matchName(drivers, wanted) {
    let result = drivers.filter(driver => driver.name === wanted );
    return result;
}