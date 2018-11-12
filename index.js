// Code your solution in this file

function findMatching(drivers, firstName) {
   return drivers.filter(function (individualDriver) {
    return individualDriver.toUpperCase() === firstName.toUpperCase();
   });
}

function fuzzyMatch(drivers, firstLetters) {
    return drivers.filter(function (individualDriver) {
        return individualDriver.slice(0, firstLetters.length) === firstLetters;
    });
}

function matchName(drivers, firstName) {
    return drivers.filter(function (individualDriver) {
        return individualDriver.name === firstName
    })
}

// driver.firstName = "Bobby"

// {
//     name: "Bobby"
// }

// const driver = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

