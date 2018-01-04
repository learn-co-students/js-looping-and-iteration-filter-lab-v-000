// Code your solution in this file
function findMatching(drivers, string) {
  const collection = [];

  for(const driver of drivers) {
    if (driver.toUpperCase() === string.toUpperCase()) {
      collection.push(driver)
    }
  }
  return collection
}

function fuzzyMatch(drivers, string) {
  const collection = [];

  for(const driver of drivers) {
    if (driver.startsWith(string)) {
      collection.push(driver)
    }
  }
  return collection
}

function matchName(drivers, string) {
  const collection = [];

  for(const driver of drivers) {
    if (driver.name === string) {
      collection.push(driver)
    }
  }
  return collection
}
