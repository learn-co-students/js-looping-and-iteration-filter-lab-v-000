function findMatching(arr, str) {
	let newArr = arr.filter(i => i.toLowerCase() === str.toLowerCase());
	return newArr;
}

function fuzzyMatch(arr, str) {
	let newArr = arr.filter(i => i.slice(0, str.length) === str);
	return newArr;
}

function matchName(arr, str) {
	let newArr = arr.filter(i => i.name === str);
	return newArr;
}