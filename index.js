// Code your solution in this file
function findMatching (drivers, name)

{
  const matches = drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
  return matches
}

function fuzzyMatch (drivers, letters)

{
  const fuzzmatches = drivers.filter(driver =>
    driver[0]=== letters.slice(0, 1) && driver[1] === letters.slice(1)
   )
  return fuzzmatches
}

function matchName(drivers, name)
{
  const matches = drivers.filter(driver => driver.name === name)
  return matches
}
