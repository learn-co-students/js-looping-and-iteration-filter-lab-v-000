function findMatching(driverArray, name) {
	return driverArray.filter(function (driverName){
		return driverName.toLowerCase() === name.toLowerCase()
	});
}

function fuzzyMatch(driverArray, name) {
	return driverArray.filter(function (matchingDriver){
		return matchingDriver.slice(0,2) === name.slice(0,2)
	});
}

function matchName(drivers, name) {
	return drivers.filter(function (driverToMatch){
		return driverToMatch.name.toLowerCase() === name.toLowerCase();
	});
}
