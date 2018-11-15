// Code your solution in this file
function findMatching (collection, name) {
  return collection.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}


function fuzzyMatch (collection, substring) {
  let substringLength = substring.length;

  return collection.filter(function (driver) {
    return driver.toLowerCase().slice(0, substringLength) === substring.toLowerCase();
  })
};

function matchName(collection, name) {
  return collection.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
};
