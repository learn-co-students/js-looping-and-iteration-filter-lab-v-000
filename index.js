// Code your solution in this file

function findMatching(drivers, string) {
  // let matchDriverList = [];
  // for (const d of drivers) {
  //   if (d.toUpperCase() === string.toUpperCase()) {
  //     matchDriverList.push(d);
  //   }
  // }
  // return matchDriverList;
  return drivers.filter(driver => driver.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(drivers, string) {
  // let matchDriverList = [];
  // for (const d of drivers) {
  //   if (d.substring(0, 2) === string.substring(0, 2)) {
  //     matchDriverList.push(d);
  //   }
  // }
  // return matchDriverList;
  return drivers.filter(driver => driver.substring(0, 2) === string.substring(0, 2));
}


function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string);
}
