// Code your solution in this file
function findMatching (collection, name) {
  return collection.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch (collection, string) {
  return collection.filter(function(driver) {
    let endPoint = string.length;
    let driverString = driver.slice(0, endPoint);
    return driverString === string;
  });
}

function matchName(collection, name) {
  return collection.filter(function(driver) {
    return driver.name === name;
  })
}
