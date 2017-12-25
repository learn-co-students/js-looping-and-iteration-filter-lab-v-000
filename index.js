// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, beginningOfWord) {
  return drivers.filter(function(driverName) {
    return  driverName.toLowerCase().startsWith(beginningOfWord.toLowerCase())
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(d_obj) {
    return d_obj.name.toLowerCase() === name.toLowerCase()
  })
}
