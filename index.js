// Code your solution in this file

function findMatching (drivers, names) {
  return drivers.filter (function (driverName) {
    return names.toLowerCase() === driverName.toLowerCase()
  });
}

function fuzzyMatch (drivers, letters) {
  return drivers.filter ( function (driverName) {
    return driverName.slice (0, letters.length) === letters;
  });
}

function matchName (drivers, name) {
	return drivers.filter (function (driver) {
		return driver.name === name
	});
}