const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
  return drivers.filter(driver=> driver.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(drivers, letter) {
  return drivers.filter(driver => driver.slice(0,2).toLowerCase() === letter.toLowerCase());
};

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
};
