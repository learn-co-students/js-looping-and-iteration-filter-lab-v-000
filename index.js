// Code your solution in this file


function findMatching(drivers, name) {
	return drivers.filter(function(driverName) {
		return driverName.toLowerCase() === name.toLowerCase();
	});
};



function fuzzyMatch(drivers, partName) {
	let lengthOfName = partName.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partName;
   });
};


function matchName(drivers, name) {
	return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
};



