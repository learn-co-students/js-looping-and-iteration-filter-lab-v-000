// Code your solution in this file
function findMatching(array, name) {
  const newArray = []
  for (const element of array) {
    debugger
    if (element.toUpperCase() === name.toUpperCase()) {
      newArray.push(element)
      debugger
    }
  }
  return newArray
}

//THIS IS CORRECT!!!!!
// function fuzzyMatch(array, string) {
//   newArray = []
//   for (const element of array) {
//     if (element.startsWith(string)) {
//       newArray.push(element)
//     }
//   }
//   return newArray
// }

function fuzzyMatch(array, string) {
  return array.filter(function (element) { return element.startsWith(string); });
}

// function matchName(object, name) {
//   newObject = []
//   for (const key in object) {
//   for (const nestedKey in object[key]) {
//     debugger
//     if (object[key][nestedKey] === name) {
//     newObject.push(object[key])
//       }
//     }
//   }
//   return newObject
// }

function matchName(array, name) {
  return array.filter(function (driver) {
    return driver.name === name
  })
}
