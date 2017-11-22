// Code your solution in this file
function findMatching(drivers, target) {
  let matches = []
  target = target.toUpperCase()
  for (let driver of drivers){
    if (driver.toUpperCase() === target) {
      matches.push(driver)
    }
  }
  return matches
}

function wordMatch(word, query){
  for (var index = 0; index < query.length; index++) {
    if (word[index] != query[index]) {
      return false
    }
  }
  return true
}

function fuzzyMatch(drivers, query){
  let matches = []
  for (let driver of drivers){
    if (wordMatch(driver,query)){
      matches.push(driver)
    }
  }
  return matches
}

//Someone get this girl a closure, stat! I miss objects. My poor global scope :(

let recursion_matches = []

function matchName(driver_object, query){
  driverRecursion(driver_object, driver_object, query)
  return recursion_matches
}

function driverRecursion(driver_object, current_object, query) {
  if (typeof driver_object === 'object') {
    for (const key in driver_object) {
      current_object = driver_object
      driverRecursion(driver_object[key], current_object, query)
    }
  }
  else {
    if (driver_object === query) {
      console.log(current_object)
      recursion_matches.push(current_object)
    }
  }
}
