// Code your solution in this file
function findMatching(drivers, string) {
  const matches = drivers.filter(driver => driver.toUpperCase() === string.toUpperCase())
  return matches
}

function fuzzyMatch (drivers, letters) {
  const matches = drivers.filter(driver => driver[0] === letters.slice(0, 1) && driver[1] === letters.slice(1)
   )
  return matches
}

function matchName(drivers, name)
{
  const matches = drivers.filter(driver => driver.name === name)
  return matches
}
