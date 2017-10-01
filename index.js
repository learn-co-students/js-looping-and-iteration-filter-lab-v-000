function findMatching(collection, name) {
	return collection.filter(person => person.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(collection, firstTwoLetters) {
	return collection.filter(person => person.substr(0,2) === firstTwoLetters);
}

function matchName(collection, name) {
	return collection.filter(obj => obj.name === name);
}