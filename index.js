// Code your solution in this file
function findMatching(drivers, iDriver) {
  return drivers.filter(function driverName(string) {
  return string.toUpperCase() === iDriver.toUpperCase();
  })
};


function fuzzyMatch(drivers, string) {
  return drivers.filter(function (eDriver) {return (eDriver[0] && eDriver[1]) === (string[0] && string[1])});
}

function matchName(drivers, string) {
  return drivers.filter(function (eDriver) {
    return eDriver.name === string
  });
}


