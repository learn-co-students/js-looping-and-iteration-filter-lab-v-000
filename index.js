// Code your solution in this file
function findMatching (drivers, name) {
   return drivers.filter(function (match) { 
       return match.toLowerCase() === name.toLowerCase(); 
       
   });
}

function fuzzyMatch(drivers, name) {
    let lengthName = name.length;
    return drivers.filter(function (letter) {
        return letter.slice(0, lengthName) === name;
    });
}

function matchName(drivers, string) {
    return drivers.filter(function (names) {
        return names.name === string;
    });
}