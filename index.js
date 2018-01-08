// Code your solution in this file
function findMatching(drivers, string) {
  let arr = [];
  drivers.filter(function(element) {
    if (element === string.charAt(0).toUpperCase() + string.slice(1)) {
      arr.push(element);
    }else if (element === string.charAt(0).toLowerCase() + string.slice(1)) {
      arr.push(element);
    }
  });
  return arr;
}

function fuzzyMatch(drivers, string) {
  let arr = [];
  drivers.filter(function(name) {
    if (name.startsWith(string)) {
      arr.push(name);
    }
  });
  return arr;
}

function matchName(drivers, string) {
  let arr = [];
  drivers.filter(function(driver) {
    if (driver.name === string) {
      arr.push(driver);
    }
  });
  return arr;
}
