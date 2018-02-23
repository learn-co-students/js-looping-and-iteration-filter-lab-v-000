// Code your solution in this file
function findMatching (array, name) {
  return array.filter(function(driver) {
     return driver.toLowerCase() === name.toLowerCase()
   })
}

function fuzzyMatch (array, name) {
  return array.filter(function(driver) {
     return driver.toLowerCase()[0] === name.toLowerCase()[0]
   })
}

function matchName (array, name) {
  return array.filter(function(driver) {
     return driver.name === name
   })
}
