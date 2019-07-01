// Do I need to create the drivers array?
// filter to match all drivers with a specific name
// function takes two argument (collection, name)
function findMatching(drivers, name) {
  // Get an argument of the collection and the name to input
  // Iterate through the drivers collection to get each name individual
  // see if the name from the position you're at matches the name input in the argument
  // Return an array with the names that match
  let matchingDrivers = []
  for ( let driver of drivers) {
    if (driver.toLowerCase() === name.toLowerCase()) {
      matchingDrivers.push(driver)
    }
  }
  return matchingDrivers
}

function fuzzyMatch(drivers, letterOrLetters) {
  // iterate over the drivers collection
  // Compare driver beginning letter to beginning letter argument
  // How do I break a string to only show it's beginning letters? .startsWith()
  let matchingDrivers = [];
  for ( const driver of drivers ) {
    if ( driver.startsWith(letterOrLetters)) {
      matchingDrivers.push(driver);
    }
  }
  return matchingDrivers;
}

function matchName( drivers, name) {
  // returns the data structure of the matched driver
  // Iterate through drivers
  // Check that input driver and iterated driver match
  // Return an object with all data sets that match the given name
  const matchingDrivers = [];
  // I used const here to see what happens not for any other reason than that
  for ( const driver of drivers ) {
    if ( driver.name === name ) {
      matchingDrivers.push(driver)
    }
  }
  return matchingDrivers;
}
