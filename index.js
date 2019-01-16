// Code your solution in this file

function findMatching(list, name) {
  return list.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, partialName) {
  let lengthOfName = partialName.length;

  return list.filter(function (driver) {
    return driver.slice(0, lengthOfName) === partialName;
  });
}

function matchName(list, name) {
  return list.filter(function (driver) {
    return driver.name === name
  });
}
