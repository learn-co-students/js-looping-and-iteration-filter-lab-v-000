function findMatching(drivers, name) {
	const matchingNames =[];

	for(let driver of drivers) {
		if (driver.toUpperCase() === name.toUpperCase()){
			matchingNames.push(driver);
		}
	}
	return matchingNames;
}

function fuzzyMatch(drivers, similarity) {
	const matchingNames = [];

	for(driver of drivers) {
		if(driver.slice(0,2) === similarity){
			matchingNames.push(driver);
		}
	}	
	return matchingNames;
}

function matchName(drivers, name) {
	const matchingNames = [];

	for(driver of drivers) {
		if(driver.name === name) {
			matchingNames.push(driver);
		}
	}
	return matchingNames;
}