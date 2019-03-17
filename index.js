// Code your solution in this file

function findMatching (collection, string) {
  return collection.filter( function (driver) {
    return driver.toLowerCase() === string.toLowerCase(); 
  })
}

function fuzzyMatch(collection, string) {
	let nameLength = string.length;
	return collection.filter(function (driver) {
		return driver.slice(0, nameLength) === string;
  })
}

function matchName(drivers, name) {
	return drivers.filter(function(driver) {
		return driver.name.toLowerCase() === name.toLowerCase();
	})
}

