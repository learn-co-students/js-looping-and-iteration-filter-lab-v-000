// Code your solution in this file

function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, letters) {
  return list.filter(driver => driver.startsWith(letters))
  console.log(letters);
}

function matchName(list, name) {
  return list.filter(driver => driver.name === name)
}

