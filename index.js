// Code your solution in this file
function findMatching(drivers, str) {
    return drivers.filter(d => d.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(drivers, str) {
    let strLength = str.length;

    return drivers.filter(d => d.slice(0,strLength) === str);
}

function matchName(drivers, name) {
    return drivers.filter(d => d.name.toLowerCase() === name.toLowerCase());
}