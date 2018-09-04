// Code your solution in this file

 // takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching(array, name) {
  return array.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

 // takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

 function fuzzyMatch(array, name) {
   return array.filter(function (driver) {
     return driver.startsWith(name)
   })
 }

 // takes an array of drivers and a string as arguments, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.

 function matchName(collection, name) {
   return collection.filter(function (driver) {
     return driver.name === name
   })
 }
