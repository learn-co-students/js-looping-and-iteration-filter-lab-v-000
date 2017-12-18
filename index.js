// Code your solution in this file

// callback functions
// function nameOfFunction(element, index, array)
// element = current element of array
// index = current index of value being processed
// array = original array

// filter functions
// let newArr = oldArr.filter(callback)
// newArr = new array that's returned
// oldArr = array to run the filter function on
// callback = the function used to test each element of the oldArr; returns true keeps the element, returns false to not keept it.

function driverLowerCase(driver, name) {
  return driver.toLowerCase() === name.toLowerCase();
}

function findMatching(collection, name) {
  const newCollection = [];
  for (const driver of collection) {
    if (driverLowerCase(driver, name)) {
      newCollection.push(driver);
    }
  }
  return newCollection;
}

//

function firstLetterMatches(name, letters) {
  return name.slice(0, letters.length) === letters;
}

function fuzzyMatch(collection, name) {
  const newCollection = [];
  for (const driver of collection) {
    if (firstLetterMatches(driver, name)) {
      newCollection.push(driver);
    }
  }
  return newCollection;
}

//

function accessDataStruct(driver, name) {
  return driver.name === name
}

function matchName(collection, name) {
  const newCollection = [];
  for (let driver of collection) {
    if (accessDataStruct(driver, name) ) {
      newCollection.push(Object.assign({}, driver));
    }
  }
  return newCollection;
}
