// Code your solution in this file
function findMatching(list, name) {
	return list.filter(function (string) {return string.toUpperCase() === name.toUpperCase(); });
}

function fuzzyMatch(list, name) {
	return list.filter(function (string) {return string.toUpperCase().substring(0,2) === name.toUpperCase().substring(0,2); });
}

function matchName (list, name) {
	return list.filter(function (string) {debugger; return string.name.toUpperCase() === name.toUpperCase(); });
}