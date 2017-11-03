// Code your solution in this file

function findMatching(drivers, string) {
	return drivers.filter(driver => driver === string || driver === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
	return drivers.filter(driver => driver.charAt(0) === string.charAt(0))
}

function matchName(drivers, string) {
	return drivers.filter(driver => driver.name === string)
}