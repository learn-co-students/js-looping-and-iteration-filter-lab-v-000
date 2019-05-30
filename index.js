function findMatching(drivers, string) {
	return drivers.filter(function (driver) {
		return driver.toUpperCase() === string.toUpperCase(); });
}

function fuzzyMatch(drivers, string) {
	return drivers.filter(function (driver) {
		return driver[0] === string[0]; });
}

function matchName(drivers, string) {
	return drivers.filter(function (driver) {
		return driver.name === string; });
}


// function fuzzyMatch (list, partialName) {
//   let lengthOfName = partialName.length;
//   return list.filter(function (driverName) {
//     return driverName.slice(0, lengthOfName) === partialName;
//   });
// }