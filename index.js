// Code your solution in this file

///////////////////////////////////////////////////////
// Helper Functions
///////////////////////////////////////////////////////

function filterName(driver, name) {
	return driver.toLowerCase() === name.toLowerCase();
}

function letterMatch (name, letters) {
	return name.slice(0, letters.length) === letters;
}



///////////////////////////////////////////////////////
// Test Functions
///////////////////////////////////////////////////////

function findMatching (collection, name) {
	const newCollection = [];
	for (const driver of collection) {
		if (filterName(driver,name)) {
			newCollection.push(driver);
		}
	}
	return newCollection;
}

function fuzzyMatch(collection, letters) {
	const newCollection = [];
	for (const driver of collection) {
		if ( letterMatch(driver, letters) ) {
			newCollection.push(driver);
		}
	}
	return newCollection;
}

function matchName (collection, name) {
	const newCollection = [];
	for (let driver of collection) {
		if ( filterName(driver.name, name) ) {
			newCollection.push(Object.assign({}, driver));
		}
	}
	return newCollection;
}