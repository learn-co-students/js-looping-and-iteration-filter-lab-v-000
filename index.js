// function findMatching (drivers, string) {
//   const newDrivers = [];
//
//   for (const driver) {
//     if (string.toLowerCase() === driver.toLowerCase()) {
//       newDrivers.push(driver);
//     }
//   }
//   return newDrivers;
// }

function findMatching (drivers, string) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === string.toLowerCase();
  });
}


function fuzzyMatch (drivers, string) {
  return drivers.filter(function (driver) {
    return driver.charAt(0) === string.charAt(0);
  });
}

function matchName (drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === string.toLowerCase();
  });
}
