// Code your solution in this file
function findMatching(array, string) {
    return array.filter(element => element.toLowerCase() == string.toLowerCase());
}

function fuzzyMatch(array, string) {
    return array.filter(element => element.startsWith(string));
}

function matchName(array, string) {
    return array.filter(element => element["name"] == string);
}