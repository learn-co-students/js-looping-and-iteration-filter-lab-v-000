function findMatching(drivers, string) {
    return drivers.filter(function(e){return e.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(e){return e[0] === string[0]; });
}

function matchName(drivers, string) {
    return drivers.filter(function(e){return e.name === string; });
}







// 1. [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
// 2. 4// => [4, 5]


// The method accepts one argument, a callback function that it will invoke with each element in the array. For each element passed to the callback, if the callback's return value is truthy, that element is copied into a new array. If the callback's return value is falsy, the element is filtered out. After iterating over every element in the collection, .filter() returns the new array.
// Now that you've built your own filter() method, you have a much deeper grasp of how JavaScript's built-in Array.prototype.filter() method works.

  