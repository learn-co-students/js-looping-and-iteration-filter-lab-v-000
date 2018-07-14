function findMatching (list, name){
  return list.filter(function (driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, query){
  let querylength = query.length;
  return list.filter(function (driver){
    return driver.slice(0,querylength) === query;
  })
}

function matchName(list, name){
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  })
}