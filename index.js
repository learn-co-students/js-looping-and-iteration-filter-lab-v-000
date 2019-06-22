// Code your solution in this file
function findMatching(arr, string) {
  const filteredDrivers = arr.filter(function (element) {return element.toLowerCase() === string.toLowerCase()});
  return filteredDrivers;
}

function fuzzyMatch(arr, string) {
  return arr.filter(function (el) {return el.toLowerCase().startsWith(string.toLowerCase());});
}

function matchName(arr, string) {
  return arr.filter(function (driver) {return driver.name === string;});
}