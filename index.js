// Code your solution in this file
function findMatching (drivers, name) {
	return drivers.filter(function (nameMatch) {
		return nameMatch.toLowerCase() === name.toLowerCase();
	});
}

// This function takes an array of drivers and a string as arguments, 
// and returns the matching list of drivers. The function should be case insensitive.



function fuzzyMatch (drivers, name) {
	return drivers.filter(driver => driver.slice(0, name.length) == name)
}

// This function takes an array of drivers and a string as arguments for querying
//  the array, and returns all drivers whose names begin with the provided letters.

function matchName (drivers, name) {
  return drivers.filter(driver => driver.name == name)
}

// This function takes an array of drivers and a string as arguments. In this 
// function, each element of the drivers array is a JavaScript object that has 
// a property of name. The function should return each element whose name property 
// matches the provided string argument.