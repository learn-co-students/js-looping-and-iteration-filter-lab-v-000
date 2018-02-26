// Code your solution in this file
// findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching(arr,string) {
  return arr.filter(a => a.toUpperCase() === string.toUpperCase())
}
// fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(arr, string) {
  return arr.filter(a => a.substring(0,2) === string)
}
// matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.

function matchName(arr, string) {
  return arr.filter(a => a.name === string)
}
