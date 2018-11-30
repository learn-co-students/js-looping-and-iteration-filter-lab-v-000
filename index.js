// Code your solution in this file
function findMatching(collection, name) {
  return collection.filter(function (driverName){
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch (collection, name) {
  let lengthOfName = name.length
  return collection.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === name
  })
}

function matchName (collection, name) {
  return collection.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
