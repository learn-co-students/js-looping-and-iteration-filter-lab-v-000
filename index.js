// Code your solution in this file
function findMatching(drivers,string) {
const match =  drivers.filter(function (item) {return item.toUpperCase() === string.toUpperCase() })
  return match
}

function fuzzyMatch(drivers, string) {

  const newArray =  drivers.filter(function (item) {return item[0] === string[0] && item[1] === string[1]})
    return newArray
}

function matchName(drivers,string) {
  const newArray =  drivers.filter(function (item) {return item.name === string})
    return newArray
}
