// Code your solution in this file
function findMatching(array, name) {
  const newarray = []
  for (const element in array) {
    if (array[element] == name) {
      newarray.push(name)
    } else if (array[element] == name.toLowerCase()) {
      newarray.push(name.toLowerCase())
    }
  }
  return newarray
}

function fuzzyMatch(array, letters) {
  const newarray = []
  for (const element in array) {
    if (array[element].substring(0, letters.length) == letters) {
    newarray.push(array[element])
    }
  }
  return newarray
}

function matchName(object, name) {
  const newobject = []
  for (const element in object) {
    if (object[element].name == name) {
      newobject.push(object[element])
    }
  }
  return newobject
}
