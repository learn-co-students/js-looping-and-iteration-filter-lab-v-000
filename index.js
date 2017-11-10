// Code your solution in this file

function findMatching(collection, name) {
    let names = collection.filter(
        driver => driver.toLowerCase() === name.toLowerCase()
    );
    return names;
}

function fuzzyMatch(collection, name) {
    let names = collection.filter(
        driver => driver.substr(0, 2) === name.substr(0, 2)
    );
    return names;
}

function matchName(collection, name) {
    let names = collection.filter(driver => driver.name === name);
    return names;
}
