// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching(drivers, name){
// 	const newDrivers = []
// 	for (const driver of drivers) {
// 		if (driver.toLowerCase() === name.toLowerCase()) {
// 			newDrivers.push(driver)
// 		}
// 	}
// 	return newDrivers;
// }

// filter iterate over the array called on, takes one argument (one element of the array)
// and split back all of the elements matching the block {}

// function findMatching(drivers, name){ 
// 	return drivers.filter(function (driver) {
// 		return driver.toLowerCase() === name.toLowerCase();
// 		});
// }

function findMatching(drivers, name){ 
	return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase()) 
}
						//(driver) { return driver.toLowerCase() === name.toLowerCase();});


function fuzzyMatch(drivers, name){ 
	return drivers.filter(driver => driver.toLowerCase().slice(0,1) === name.toLowerCase().slice(0,1)) 
}


// const drivers = [
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh' },
//         {
//           name: 'Sammy',
//           hometown: 'New York' } ,
//         {
//           name: 'Sally',
//           hometown: 'Cleveland' },
//         {
//           name: 'Annette',
//           hometown: 'Los Angeles' },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay' }
//       ];
function matchName(drivers, name){ 
	return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase()) 
}



