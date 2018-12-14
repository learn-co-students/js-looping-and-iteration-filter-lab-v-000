// Code your solution in this file
// function findMatching(theArray, theString) {
//     let newArr = theArray.filter(name => {if (name.toLowerCase() === theString.toLowerCase()) {return name;}});
//     return newArr;
// }
function findMatching(arr, str) {
    let newArr = arr.filter(function(name) { return str.toLowerCase() === name.toLowerCase();})
    return newArr;
}

function fuzzyMatch(arr, letters) {
    let newArr = arr.filter(function(name) { return name.slice(0,2) === letters;})
    return newArr;
}

function matchName(arr, str) {
    let newArr = arr.filter(function(object) { for (const key in object) { return object[key] === str; }})
    return newArr;
}