// returns all drivers that match the passed in name
// returns matching drivers if case does not match but letters do
// returns an empty array if there is no match
function findMatching(drivers, name) {
  return drivers.filter(function(driverMatch) {
    return driverMatch.toLowerCase() === name.toLowerCase()
  })
}


// returns a driver if beginning provided letters match
// does not return drivers if only middle or ending letters match
// does not return drivers if only middle or ending letters match
function fuzzyMatch(drivers, letters) {
  let string = letters.length
  return drivers.filter(function(driverMatch) {
    return driverMatch.slice(0, string) === letters
  })
}



// accesses the data structure to check if name matches
 function matchName(drivers, name) {
  return drivers.filter(function(driverMatch) {
    return driverMatch.name === name
  })
}