// Code your solution in this file
function findMatching(drivers, name) {
	return drivers.filter( driverName => { return driverName.toLowerCase() === name.toLowerCase(); });
};

function fuzzyMatch(drivers, letters) {
	let length = letters.length;
	return drivers.filter( driverName => { return driverName.slice( 0, length ) === letters; });
};

function matchName(drivers, name) {
	return drivers.filter( driver => { return driver.name === name })
};