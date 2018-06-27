function findMatching (drivers, driver_name) {
  const driverResult = drivers.filter(name => name.toLowerCase() === driver_name.toLowerCase());
  // const driverReturn = drivers.filter(function(name) {return name.toLowerCase() === driver_name.toLowerCase();});
  return driverResult;
}

function fuzzyMatch(drivers, name_beg) {
  const nameResult = drivers.filter(name => name.toLowerCase().substring(0, name_beg.length) === name_beg.toLowerCase());
  return nameResult;
}

function matchName(drivers, driver_name) {
  //this method is filtering through an array of objects, w/ name as a key on each object
  let matching = [];
  for (var obj in drivers) {
    if (drivers[obj].name.toLowerCase() === driver_name.toLowerCase()) {
      matching.push(drivers[obj]);
    }
  }
  return matching;
}

// Could also do: 
// function matchName (list, name) {
//   return list.filter(function (driver) {
//     return driver.name.toLowerCase() === name.toLowerCase();
//   });
// }



