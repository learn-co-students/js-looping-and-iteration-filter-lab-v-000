// Code your solution in this file
function findMatching(collection, name) {

  return collection.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase(); });

}


function fuzzyMatch(collection, name) {
  return collection.filter(function (driver) { return driver.slice(0, name.length).toLowerCase()  === name.toLowerCase() ; });
  }

  function matchName(collection, name) {

    return collection.filter(function (driver) { return driver.name  === name; });

    }
