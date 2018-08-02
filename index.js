// Code your solution in this file

function findMatching(collection, name){
  return collection.filter(function(driverNames){
    return driverNames.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(collection, partOfName){
  let nameLength = partOfName.length;
  return collection.filter(function(driverName){
    return driverName.slice(0, nameLength) === partOfName
  })
}

function matchName(collection, name){
  return collection.filter(
    function(driver){
      return driver.name.toLowerCase() === name.toLowerCase();
    });
}
