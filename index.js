// Code your solution in this file
function findMatching(drivers, name) {
	return drivers.filter(function (driverName) {
		return driverName.toLowerCase() === name.toLowerCase();
	});
}

function fuzzyMatch(drivers, name) {
	return drivers.filter(function (driverName) {
		return driverName[0] === name[0];
	});
}

function matchName(drivers, name) {
	return drivers.filter(function (driverName) {
		return driverName.name === name;
	});
}


