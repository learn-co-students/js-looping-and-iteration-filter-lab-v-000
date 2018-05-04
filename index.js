// // Code your solution in this file
// findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers.
// The function should be case insensitive.
//
// fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array,
//  and returns all drivers whose names begin with the provided letters.
//
// matchName - This function takes an array of drivers and a string as arguments.
// In this function, each element of the drivers array is a JavaScript object that has a property of name.
// // The function should return each element whose name property matches the provided string argument.
//
// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });

function findMatching(drivers, name){
  return drivers.filter(function (driver) {return driver.toLowerCase() === name.toLowerCase() })
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function (driver) {return driver.charAt(0)+driver.charAt(1) === string})
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {return driver.name.toLowerCase() === name.toLowerCase() })
}
