// Code your solution in this file
function findMatching(array, string) {
  let returnArray = []
  let matchSearch = string.toLowerCase()
  for (const item of array) {
    let itemSearch = item.toLowerCase()
    if (itemSearch === matchSearch) {
      returnArray.push(item)
    }
  }
  return returnArray
}

function fuzzyMatch(array, string) {
  let returnArray = []
  let matchSearch = string.toLowerCase()
  for (item of array) {
    let itemSearch = item.slice(0, matchSearch.length).toLowerCase()
    if (itemSearch === matchSearch) {
      returnArray.push(item)
    }
  }
  return returnArray
}

function matchName(array, string) {
  returnArray = []
  for (item of array) {
    if (item.name === string) {
      returnArray.push(item)
    }
  }
  return returnArray
}
