// Code your solution in this file
function findMatching(drivers, name) {
  let name1 = name[0].toLowerCase() + name.slice(1, name.length)
  let longWords = drivers.filter(driver => driver == name || driver == name1)
  return longWords
}

function fuzzyMatch(drivers, first_letters) {
  let longWords = drivers.filter(driver => driver.startsWith(first_letters))
  return longWords
}

function matchName(drivers, name) {
  let longWords = drivers.filter(driver => driver.name === name)
  return longWords
}
