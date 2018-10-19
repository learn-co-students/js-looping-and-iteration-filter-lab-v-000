// Code your solution in this file
function findMatching (array, str) {
  const result = [];

  for ( const driver of array) {
    if ( driver.toUpperCase() === str.toUpperCase() ) {
      result.push(driver);
    }
  }
  return result;
}

function fuzzyMatch (array, str) {
  const result = [];

  for (const driver of array) {
    if (driver.startsWith(str)) {
      result.push(driver);
    }
  }
  return result;
}

function matchName (array, str) {
  const result = [];

  for ( const driver of array) {
    if ( driver.name === str ) {
      result.push(driver);
    }
  }
  return result;
}
