// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, name) {
  return arr.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

console.log(findMatching(drivers, 'sally'));

function fuzzyMatch(arr, partial) {
  let nameLength = partial.length;
  return arr.filter(function(driver) {
    return driver.slice(0, nameLength) === partial;
  });
}

console.log(fuzzyMatch(drivers, 'Bo'));

function matchName(arr, name) {
  return arr.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}

console.log(matchName(drivers, 'Bobby'));
