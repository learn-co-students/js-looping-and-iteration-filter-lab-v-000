// Code your solution in this file

function findMatching(drivers, string) {
	return drivers.filter(driver => driver === string || driver === string.toLowerCase())
}

// function findMatching (list, name) {
//   return list.filter(function (driverName) {
//     return driverName.toLowerCase() === name.toLowerCase();
//   });
// }


function fuzzyMatch(drivers, string) {
	return drivers.filter(driver => driver.charAt(0) === string.charAt(0))
}

// function fuzzyMatch (list, partialName) {
//   let lengthOfName = partialName.length;
//   return list.filter(function (driverName) {
//     return driverName.slice(0, lengthOfName) === partialName;
//   });
// }

function matchName(drivers, string) {
	return drivers.filter(driver => driver.name === string)
}


// function matchName (list, name) {
//   return list.filter(function (driver) {
//     return driver.name.toLowerCase() === name.toLowerCase();
//   });
// }