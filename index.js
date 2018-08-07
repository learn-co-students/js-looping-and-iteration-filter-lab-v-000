// Code your solution in this file
function findMatching(collection, name){
	let array = [];
	for (const char of collection){
		if (char.toLowerCase() === name.toLowerCase()){
			array.push(char);
		}
	}
	return array;
};

function fuzzyMatch(collection, term) {
	let array = [];
	for (const char of collection) {
		if (char.includes(term) && term[0] === char[0]){
			array.push(char);
		}
	}
	return array;
}

function matchName(collection, term) {
	let array = [];
	for (const char of collection){
		if (char.name === term){
			array.push(char);
		}
	}
	return array;
};