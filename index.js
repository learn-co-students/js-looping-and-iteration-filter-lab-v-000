// Code your solution in this file
function findMatching(drivers, name) {
  const arr = []
  for (const driver in drivers) {
    if (drivers[driver] === name || drivers[driver] === name.toLowerCase()) {
      arr.push(drivers[driver])
    }
  }
  return arr
}

function fuzzyMatch(drivers, name) {
  const arr = []
  for (const driver in drivers) {
    if (drivers[driver].substring(0, name.length) === name) {
      arr.push(drivers[driver])
    }
  }
  return arr
}

function matchName(drivers, name) {
  const arr = []
  for (const driver in drivers) {
    if (drivers[driver].name === name) {
      arr.push(drivers[driver])
    }
  }
  return arr
}
