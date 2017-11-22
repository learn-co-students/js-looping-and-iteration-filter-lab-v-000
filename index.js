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

  }
}