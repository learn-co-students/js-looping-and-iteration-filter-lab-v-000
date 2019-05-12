// Code your solution in this file

function findMatching(drivers, driver) {
	return drivers.filter(function(driver_name) { return driver_name.toLowerCase() === driver.toLowerCase(); });
}

function fuzzyMatch(drivers, driver) {
	return drivers.filter(function(driver_name) { return driver_name.toLowerCase()[0] === driver.toLowerCase()[0]; });
}

function matchName(drivers, driver) {
	return drivers.filter(function(driver_name) { return driver_name['name'] === driver; });
}