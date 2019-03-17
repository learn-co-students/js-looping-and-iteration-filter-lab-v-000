// Code your solution in this file

function findMatching (list, name) {
	console.log('findMatching',list)
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, namePartial) {
	console.log('fuzzyMatch',list)
	let nameLength = namePartial.length;
	return list.filter(function(driverName) {
		return driverName.slice(0, nameLength) === namePartial;
	})
}

function matchName(list, name) {
	console.log('matchName',list)
	return list.filter(function(driver) {
		return driver.name === name;
	})
}