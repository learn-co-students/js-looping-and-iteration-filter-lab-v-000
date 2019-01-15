function findMatching1(collection, name) {
  let newDriver = []
  for (const driver of collection) 
    {if (driver.toLowerCase() === name.toLowerCase()) { newDriver.push(driver) }
    }
  return newDriver
}


function findMatching(collection, name) {
  return collection.filter(function(driver) { return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(collection, name) { return collection.filter(function(driver) { return driver.charAt(0) === name.charAt(0);
  });
}

function matchName(collection, name) {
   
  return collection.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}