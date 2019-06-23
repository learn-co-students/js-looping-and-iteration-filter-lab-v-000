
function findMatching(drivers, name){
	let matched = drivers.filter(str => str.toLowerCase() === name.toLowerCase());
	return matched;
}

function fuzzyMatch(drivers, letters){
	let matched = drivers.filter(str => str.slice(0, letters.length) === letters);
	return matched;
}

function matchName(drivers, str){
	let matched = drivers.filter(d => d.name.toLowerCase() === str.toLowerCase());
	return matched;
}