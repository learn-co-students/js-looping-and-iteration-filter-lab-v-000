// Code your solution in this file


function findMatching(list, string) {
    return list.filter(function (driver) { 
        return (driver.toLowerCase() === string.toLowerCase()) ; });
    }

function fuzzyMatch(list, subStr) {
    let length = subStr.length;
    return list.filter(function (driver) { 
        return (driver.slice(0, length) === subStr)
    })
}


function matchName(list, string) {
    let newArray = list.filter(function (el) {
        return el.name === string});
        return newArray;
}