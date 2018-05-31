

function findMatching(collection, name) {

   return collection.filter(function (driver) {
  return driver.toLowerCase() === name.toLowerCase()
})
}
function fuzzyMatch(collection, letters) {

   debugger
  return collection.filter(function (driver) {
 return driver[0][0] === letters[0]

})
}
function matchName(collection, name) {

   return collection.filter(function (driver) {
  return driver.name === name
})
}
