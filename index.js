// Code your solution in this file


function findMatching (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName[0] === name[0];
  });
}

function matchName (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.name.toLowerCase() === name.toLowerCase();
  });
}



//Write matchName - This function takes an array of drivers and a string as
//arguments. In this function, each element of the drivers array is a JavaScript
// object that has a property of name. The function should return each element
//whose name property matches the provided string argument.


//Write fuzzyMatch - This function takes an array of drivers and a string as
// arguments for querying the array, and returns all drivers whose names begin
//with the provided letters.


//Write findMatching- This function takes an array of drivers and a string
//as arguments, and returns the matching list of drivers. The function should be case insensitive.
