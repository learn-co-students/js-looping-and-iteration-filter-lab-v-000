// Code your solution in this file

function findMatching(array, person) {
    return array.filter(driver => driver.toLowerCase() === person.toLowerCase());
}


function fuzzyMatch(array, find_string) {
    return array.filter(driver => driver.slice(0, find_string.length).toLowerCase() === find_string.toLowerCase());
}

function matchName(array, name) {
    return array.filter(driver => driver.name === name);
}
