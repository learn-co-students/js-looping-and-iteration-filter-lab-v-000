// Code your solution in this file
function findMatching(collection, name) {
  const newCollection = [];

  for (const driver of collection) {
    if (driver.toLowerCase() === name.toLowerCase()) {
      newCollection.push(driver);
    }
  }
  return newCollection;
}

function fuzzyMatch(collection, name) {
  const newCollection = [];
  const regex = new RegExp('^' + name, 'gi');
  for (const driver of collection) {
    if (driver.match(regex)) {
      newCollection.push(driver);
    }
  }
  return newCollection;
}

function matchName(collection, name) {
  const newCollection = [];
  for (const driver of collection) {
    if (driver.name === name) {
      newCollection.push(driver);
    }
  }
  return newCollection;
}
