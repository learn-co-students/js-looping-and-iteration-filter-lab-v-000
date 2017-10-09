function findMatching(drivers, string) {
	// const matchingDrivers = [];
	// string = string.toUpperCase();
	// for (const driver of drivers) {
	// 	if (driver.toUpperCase() === string){
	// 		matchingDrivers.push(driver);
	// 	}
	// }
	// return matchingDrivers;
	string = string.toLowerCase();
	return drivers.filter((driverName) => driverName.toLowerCase() === string);
}

function fuzzyMatch(drivers, string) {
	// const matchingDrivers = [];
	// for (const driver of drivers) {
	// 	if (driver.slice(0, string.length) === string){
	// 		matchingDrivers.push(driver);
	// 	}
	// }
	// return matchingDrivers;

	return drivers.filter((driverName) => driverName.slice(0,string.length) === string);
}

function matchName(drivers, string) {
// 	const matchingDrivers = [];
// 	for (const driver of drivers) {
// 		if (driver.name === string){
// 			matchingDrivers.push(driver);
// 		}
// 	}
// 	return matchingDrivers;
	return drivers.filter((driver) => driver.name === string);
}
