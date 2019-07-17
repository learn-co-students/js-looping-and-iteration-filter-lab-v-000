function findMatching (drivers, name) {
  return drivers.filter (function (driver) { return driver == name.toLowerCase() || driver == name; });
};

function fuzzyMatch (drivers, text) {
  return drivers.filter (function (driver) { return driver.startsWith(text); });
};

function matchName (drivers, name) {
  return drivers.filter (function (driver) { return driver.name === name })
};
