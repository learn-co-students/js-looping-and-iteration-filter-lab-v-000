// Code your solution in this file
function findMatching(arr, str) {
   return arr.filter(function(name) {
    return name.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(arr, letter) {
  return arr.filter(function(name) {
    return name.charAt(0) === letter.charAt(0)
  })
}

function matchName(arr, str) {
  return arr.filter(function(name) {
    return name.name.toLowerCase() === str.toLowerCase()
  })
}
