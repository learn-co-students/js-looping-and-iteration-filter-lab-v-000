// Code your solution in this file


//findMatching- This function takes an array of drivers and a string as arguments, and returns
//the matching list of drivers. The function should be case insensitive.
function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });

};

function fuzzyMatch(drivers, substring) {
  const substringLength = substring.length; // need the length of the substring so u kno how much to slice
  return drivers.filter(function (driverName) {
    return driverName.slice(0, substringLength) === substring;
  });
}

//This function takes an array of drivers and a string as arguments for querying the array, and returns
//all drivers whose names begin with the provided letters.


function matchName(drivers, name) {
  return drivers.filter(function (driverObj) {
    return driverObj.name.toLowerCase() === name.toLowerCase();
  });
};

//This function takes an array of drivers and a string as arguments. In this function, each element of the
//drivers array is a JavaScript object that has a property of name. The function should return each element
//whose name property matches the provided string argument.
