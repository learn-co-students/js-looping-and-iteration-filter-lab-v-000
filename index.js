// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function (el) {return (el.toLowerCase() === name.toLowerCase())});
}

function fuzzyMatch(drivers, firstLetters) {

  function match(driver) {
    return driver.startsWith(firstLetters);
  }
  return drivers.filter(match);
}

function matchName(drivers, name) {
  return drivers.filter(function (el) {return (el.name.toLowerCase() === name.toLowerCase())});
}
