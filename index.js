// Code your solution in this file

function findMatching(array, match) {
	return array.filter(function (item) { return item.toUpperCase() === match.toUpperCase(); });
}


function fuzzyMatch(array, match) {
	len = match.length;

	function fuzzyCompare(item) {
		it = item.slice(0, len);
		return it === match;
	}

	rtn = array.filter(fuzzyCompare);
	return rtn;
}

function matchName(array, nameMatch) {
	function nameCompare(item) {
		return item.name === nameMatch;
	}

	rtn = array.filter(nameCompare);
	return rtn;
}
