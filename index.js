// Code your solution in this file
function findMatching(array, name) {
  const new_array = []
  for (const element of array) {
    if (element == name || element == name.toLowerCase()) {
      new_array.push(element)
    }
  }
  return new_array
}

function fuzzyMatch(array, input) {
  const new_array = []
  for (const element of array) {
    if (element.substring(0,input.length) == input){
      new_array.push(element)
    }
  }
  return new_array
}

function matchName(object,name) {
  const new_array = []
  for (const key of object) {
    if (key.name == name) {
      new_array.push(key)
    }
  }
  return new_array
}
