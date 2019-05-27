// Code your solution in this file
function findMatching(drivers, name) {
	return drivers.filter(driver => driver.match(RegExp(name, 'i')) );
}

function fuzzyMatch(drivers, name) {
	return drivers.filter(driver => driver.indexOf(name) === 0);
}

function matchName(drivers, name) {
	return drivers.filter(driver => driver.name == name);
}
