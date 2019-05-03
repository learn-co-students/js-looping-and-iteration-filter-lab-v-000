// Code your solution in this file

function findMatching(arr, name) {
  return arr.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase() })
}

function fuzzyMatch(arr, name) {
  return arr.filter(function (driver) { return driver.slice(0, name.length) === name })
}

function matchName(arr, find) {
  let newObj = []
  for (const user of arr) {
    if (user.name === find) {
      newObj.push(user)
    }
  }
  return newObj
}
