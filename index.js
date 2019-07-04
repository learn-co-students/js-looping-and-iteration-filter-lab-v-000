// Code your solution in this file
function findMatching(arr, string) {
  names = arr.filter(function (name) { return name === string || name === string.toLowerCase() })
  return names
}

function fuzzyMatch(arr, string) {
  names = arr.filter(function (name) { return name.substring(0,2) === string })
  return names
}

function matchName(arr, string) {
  const col = []
  for (const user of arr) {
    if (user.name === string)
    col.push(user)
  }
  return col
}
