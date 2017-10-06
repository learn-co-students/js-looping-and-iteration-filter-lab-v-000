// Code your solution in this file
function findMatching(collection, name) {
	const newCollection = [];
	for (const member of collection) {
		if (member.toLowerCase() === name.toLowerCase()) {
			newCollection.push(member);
		}
	}
	return newCollection;
}


function fuzzyMatch(collection, namePart) {
	const newCollection = [];
	for (const member of collection) {
		if (member.startsWith(namePart)) {
			newCollection.push(member);
		}
	}
	return newCollection;
}

function matchName(collection, name) {
	const newCollection = [];
	for (const member of collection) {
		if (member.name === name) {
			newCollection.push(member);
		}
	}
	return newCollection;
} 
