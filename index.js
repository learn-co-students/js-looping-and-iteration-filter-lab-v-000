// Code your solution in this file

function findMatching(drivers, name){
  return drivers.filter(function (driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  })
}



function fuzzyMatch(drivers, name){
  let nameLength = name.length;
  return drivers.filter(function (driverName){
    return driverName.slice(0, nameLength) === name;
  })
}



function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
