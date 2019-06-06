function findMatching(drivers, name) {
	return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(drivers, query) {
	return drivers.filter(driver => driver.startsWith(query));
}

function matchName(drivers, name) {
	return drivers.filter(driver => driver.name.toUpperCase() === name.toUpperCase());
}
