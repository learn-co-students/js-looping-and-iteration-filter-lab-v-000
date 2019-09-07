// Code your solution in this file
function findMatching (drivers, name) {
	return drivers.filter( function (userName) { return userName.toLowerCase().indexOf(name.toLowerCase()) !== -1; })
}

function fuzzyMatch (drivers, char) {
	return drivers.filter( function (val) { return val.startsWith(char); })
}

function matchName(drivers, name) {
	return drivers.filter( function (driver) { return driver.name === name; })
}