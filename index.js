function findMatching(collection, name) {
	return collection.filter(function (match) { return name.toLowerCase() === match.toLowerCase(); });
}

function fuzzyMatch(collection, letters) {
	return collection.filter(function (name) { return name.startsWith(letters) });
}

function matchName(collection, name) {
	return collection.filter(function (object) { return object.name === name; });
}