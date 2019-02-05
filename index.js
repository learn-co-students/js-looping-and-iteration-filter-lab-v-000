// Code your solution in this file
function findMatching (collection, name) {
  return collection.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (collection, partialName) {
  let lengthOfName = partialName.length;
  return collection.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (collection, name) {
  return collection.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}

// function findMatching(collection, name) {
//   const newCollection = [];
//
//   for (const driver of collection) {
//     if (driver.toLowerCase() === name.toLowerCase()) {
//       newCollection.push(driver);
//     }
//   }
//   return newCollection;
// }
//
// function fuzzyMatch(collection, partialName) {
//   const newCollection = [];
//   const regex = new RegExp('^' + partialName, 'gi');
//   for (const driver of collection) {
//     if (driver.match(regex)) {
//       newCollection.push(driver);
//     }
//   }
//   return newCollection;
// }
//
// function matchName(collection, name) {
//   const newCollection = [];
//   for (const driver of collection) {
//     if (driver.name === name) {
//       newCollection.push(driver);
//     }
//   }
//   return newCollection;
// }
