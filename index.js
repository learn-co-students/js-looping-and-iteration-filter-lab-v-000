function findMatching (drivers, name) {
return drivers.filter(function (driverNames) { 
	return driverNames.toLowerCase() === name.toLowerCase();
	});
}

function fuzzyMatch (drivers, letters){
	let nameTrim = letters.length;
	return drivers.filter(function (driverNames){
		return driverNames.slice(0, nameTrim) === letters;
	});
	}

function matchName (drivers, name) {
	return drivers.filter (function (matchDriver) {
		return matchDriver.name.toLowerCase() === name.toLowerCase();
	});
}
