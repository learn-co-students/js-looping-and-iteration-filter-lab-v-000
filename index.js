// Code your solution in this file
function findMatching(array, value){
	let capital_value = value.toUpperCase()
	let newArray = []
	for (const element of array)
		if (element.toUpperCase() === capital_value){
			newArray.push(element)
		}
	return newArray
}

function fuzzyMatch(array, substring){
	let newArray = []
	for (const element of array){
		if (element.startsWith(substring)){
			newArray.push(element)
		}
	}
	return newArray
}

function matchName(array, value){
	let newArray = []
	for (const element of array){
		if (element.name === value){
			newArray.push(element)
		}
	}
	return newArray
}
