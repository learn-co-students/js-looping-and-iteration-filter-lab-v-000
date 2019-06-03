function findMatching(collection, name) {
	return collection.filter(function(driver) { 
		return driver.toLowerCase() === name.toLowerCase(); 
	});
}

function fuzzyMatch(collection, letters) {
	let size = letters.length;

	return collection.filter(function(name) {
		return name.slice(0, size) === letters
	});
}

function matchName(collection, name) {
	return collection.filter(function(person) {
		return person.name === name;
	})
}