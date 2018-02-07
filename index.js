function findMatching (drivers, string) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  })
}

function fuzzyMatch (drivers, string) {
  return drivers.filter(function (driverName) {return driverName.slice(0, string.length) === string;
  });
}

function matchName (drivers, string) {
  
}
