// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter(function (driver) {
    return driver.toUpperCase() === name.toUpperCase();
  });
};

function fuzzyMatch(arr, name) {
  let length = name.length;
    return arr.filter(function (driver) {
      return driver.slice(0, length) === name;
  });
};

function matchName(arr, name) {
  return arr.filter(function (driver) {
    return driver["name"].toUpperCase() === name.toUpperCase();
  });
};
