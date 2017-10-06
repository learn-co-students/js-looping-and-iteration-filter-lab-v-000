// Code your solution in this file

function findMatching(array, name) {
  return array.filter(function (driver) {
    return driver.toUpperCase() === name.toUpperCase();
  });
};

function fuzzyMatch(array, name) {
  let length = name.length;
  return array.filter(function (driver) {
    return driver.slice(0, length) === name;
  })
}

function matchName(array, name) {
  return array.filter(function (driver) {
    return driver["name"].toUpperCase() === name.toUpperCase();
  });
}
