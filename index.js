// Code your solution in this file
function findMatching(array, string){
  return array.filter(function (driverName){
    return driverName.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(array, string){
  let nameLength = string.length
  return array.filter(function (partialName){
    return partialName.slice(0, nameLength) === string
    })
}

function matchName(array, string){
  return array.filter(function (driverName){
    return driverName.name.toLowerCase() === string.toLowerCase()
  })
}
