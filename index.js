// Code your solution in this file
findMatching = (drivers, name) => {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase()
  });
};

fuzzyMatch = (drivers, letters) => {
  return drivers.filter(function(driver) {
    return driver.slice(0, letters.length) === letters
  });
};

matchName = (drivers, name) => {
  return drivers.filter(function(driver) {
    return driver["name"] === name
  });
};
