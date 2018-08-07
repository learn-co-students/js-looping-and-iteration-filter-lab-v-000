// Code your solution in this file
function findMatching(drivers, name){
  const newCollection = [];

  for (const driver of drivers) {
    if (driver.toUpperCase() === name.toUpperCase()) {
      newCollection.push(driver);
    }
  }

  return newCollection;
}

function fuzzyMatch(drivers, chars){
  const members = [];

  for (const driver of drivers) {
    if (driver.slice(0, chars.length) === chars) {
      members.push(driver);
    }
  }
  return members;

}

function matchName(drivers, membername){
  const newCollection = [];

  for (const driver of drivers) {
    if (driver.name === membername ) {
      newCollection.push(driver);
    }
  }
  return newCollection;
}
