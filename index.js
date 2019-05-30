function filter(drivers, string) {
	for (const driver of drivers) {
		if (findMatching(drivers, string)) {
			console.log(driver.name);
		}
	}
}

function findMatching(drivers, string) {
	return drivers[name] === 'string';
}