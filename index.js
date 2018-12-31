// Code your solution in this file

function findMatching(drivers, name){
  return drivers.filter(function(driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, snippet){
  return drivers.filter(function(driverName){
    let snippetLength = snippet.length;
    return driverName.substring(0, snippetLength).toLowerCase() == snippet.toLowerCase();
  });
}

function matchName(drivers, name){
  return drivers.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
