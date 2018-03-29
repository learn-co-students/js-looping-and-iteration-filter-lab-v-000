function findMatching(drivers, string) {
  return drivers.filter((driver) => {
    return driver.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((driver) => {
    return string.includes(driver[0])
  })
}

function matchName(drivers, string) {
  return drivers.filter((driver) => {
    return driver.name === string
  })
}
