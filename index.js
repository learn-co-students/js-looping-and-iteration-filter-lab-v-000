// Code your solution in this file
// function findMatching(theArray, theString) {
//     let newArr = theArray.filter(name => {if (name.toLowerCase() === theString.toLowerCase()) {return name;}});
//     return newArr;
// }
function findMatching(arr, name) {
    return arr.filter(function(arrName) { 
        return arrName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(arr, letters) {
    let nameLength = letters.length;
    return arr.filter(function(name) { 
        return name.slice(0,nameLength) === letters;
    });
}

function matchName(arr, str) {
    return arr.filter(function(object) { 
        for (const key in object) {
            return object[key].toLowerCase() === str.toLowerCase(); 
        }
    });
}