const findMatching = (drivers, name) => {
  return drivers.filter(function (driver) {
    return driver.toUpperCase() === name.toUpperCase();
  });
}

const fuzzyMatch = (drivers, partial) => {

  return drivers.filter(function (driver) {
    return driver.slice(0, partial.length) === partial;
  });
}

const matchName = (drivers, name) => {
  return drivers.filter(function (driver) {
    return driver.name.toUpperCase() === name.toUpperCase();
  });
}
