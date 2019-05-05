// Code your solution in this file
function findMatching(array,name){
  return array.filter(string => string.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(array,name){
  return array.filter(string => string.toLowerCase()[0] === name.toLowerCase()[0])
}

function matchName(array, name){
  return array.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}