// Code your solution in this file
function  findMatching (list, name) {
  return list.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, partName) {
  return list.filter(function(driverName) {
    let nameLength = partName.length
     return driverName.slice(0, nameLength) === partName
  });
}

function matchName (list, name) {
  return list.filter(function(driver) {
    return driver.name === name
  });
}
