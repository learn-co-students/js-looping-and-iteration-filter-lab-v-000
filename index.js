// Code your solution in this file

//This function takes an array of drivers and a string as arguments, and returns the matching list of drivers.
//The function should be case insensitive.

function findMatching (drivers, string) {
  return drivers.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase();
  })
}

//This function takes an array of drivers and a string as arguments for querying the array,
//and returns all drivers whose names begin with the provided letters.
//string = 'Sa'

function fuzzyMatch (drivers, string) {
  return drivers.filter(function (letters) {
    return letters[0] + letters[1] === string;
  })
}

//This function takes an array of drivers and a string as arguments.
//In this function, each element of the drivers array is a JavaScript object that has a property of name.
//The function should return each element whose name property matches the provided string argument.

function matchName (drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string;
  })
}
