function findMatching (collection, name) {
  return collection.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch (collection, beginningLetters) {
  let nameLength = beginningLetters.length
  return collection.filter(function(driverName) {
    return driverName.slice(0, nameLength) === beginningLetters
  })
}

function matchName (collection, name) {
  return collection.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
