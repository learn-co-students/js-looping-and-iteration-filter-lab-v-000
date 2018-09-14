// Code your solution in this file
function findMatching(drivers, name) {
	return drivers.filter(function (findDriver) {
		return findDriver.toLowerCase() === name.toLowerCase();
	});
}

function fuzzyMatch(drivers, givenName) {
	let letters = givenName.length
	return drivers.filter(function (driverName) {
		return driverName.slice(0, letters) === givenName
	});
}

function matchName(drivers, name) {
	return drivers.filter(function(driver) {
		return driver.name === name
	});
}