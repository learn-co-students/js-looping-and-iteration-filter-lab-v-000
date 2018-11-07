function findMatching (drivers, string) {
	return drivers.filter(function (driver) { return string.toLowerCase() === driver.toLowerCase();})
}

function fuzzyMatch (drivers, string) {
	return drivers.filter(function (driver) { return string.substring(0, 1) === driver.substring(0, 1); });
}

// below also works but only to match for first letter of the names
// function fuzzyMatch (drivers, string) {
// 	return drivers.filter(function (driver) { return string.charAt(0) === driver.charAt(0); });
// }

function matchName (drivers, string) {
	return drivers.filter(function (driver) { return string === driver.name; });
}