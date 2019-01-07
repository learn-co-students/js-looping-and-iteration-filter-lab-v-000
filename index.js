// Code your solution in this file

function findMatching(drivers, firstName) {
    return drivers.filter(function (driverName) {
        return driverName.toUpperCase() === firstName.toUpperCase();
    });
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function (driverName) {
        return driverName.startsWith(`${letters}`);
    });
}

function matchName(drivers, testName) {
    return drivers.filter(function (driverName) {
        return driverName.name === testName;
    });
}
