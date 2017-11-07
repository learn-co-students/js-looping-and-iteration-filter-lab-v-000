// Code your solution in this file
function findMatching (drivers, search) {
	return drivers.filter(function (driver) {
		return driver.toLowerCase() === search.toLowerCase();
	});
};

function fuzzyMatch(drivers, search) {
	return drivers.filter(function (driver) {
		return driver.startsWith(search);
	});
};

function matchName(drivers, search) {
	return drivers.filter(function(driver) {
		return driver.name == search;
	});
};