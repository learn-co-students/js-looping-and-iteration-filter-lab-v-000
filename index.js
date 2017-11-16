// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(arr, letters) {
  return arr.filter(function (driverName) {
    return driverName.slice(0, 2) === letters;
  });
}

function matchName(arr, name) {
  return arr.filter(function (driverArr) {
    return driverArr.name === name;
  });
}
