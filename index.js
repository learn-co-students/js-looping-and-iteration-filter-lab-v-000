// Code your solution in this file
function findMatching (drivers, string) {
    return drivers.filter(function(n) {return n.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch (drivers, string) {
    let first_letter = string.slice(0,1);
    return drivers.filter(function(n) {return n.slice(0,1).toLowerCase() === first_letter.toLowerCase()})

}

function matchName (drivers, string) {
    return drivers.filter(function(n) {return n.name === string})
}
