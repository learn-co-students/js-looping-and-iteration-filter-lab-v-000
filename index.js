// Code your solution in this file
function findMatching(array, name) {

	return array.filter(function (element) {return name.toLowerCase() == element.toLowerCase();});

}

function fuzzyMatch(array, letters) {
	const reg = '^(' + letters + ')'
	return array.filter(function (element) {return element.match(RegExp(reg))})
}

function matchName(array, name) {
	return array.filter(function (driver) {return driver.name === name})
}