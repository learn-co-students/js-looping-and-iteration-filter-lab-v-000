const findMatching = (drivers, name) => {
  return drivers.filter(function (driver) {
    return driver.toUpperCase() === name.toUpperCase();
  });
}

const fuzzyMatch = (drivers, name) => {
  return drivers.filter(function (driver) {
    return driver[0].toUpperCase() === name[0].toUpperCase();
  });
}

const matchName = (drivers, name) => {
  return drivers.filter(function (driver) {
    return driver.name.toUpperCase() === name.toUpperCase();
  });
}
