// Code your solution in this file
function findMatching(collection, name) {
  let newCollection = collection.filter(element => name.toLowerCase() === element.toLowerCase());
  return newCollection
};

function fuzzyMatch(collection, letters) {
  let newCollection = collection.filter(element => letters === element.slice(0, 2));
  return newCollection;

};

// function matchName(collection, driver) {
//   let newCollection = collection.filter(driver => collection.name === driver)
//   return newCollection;
// };

function matchName(collection, driverName) {
  let newCollection = collection.filter(driver => driver.name === driverName)
  return newCollection;
};
