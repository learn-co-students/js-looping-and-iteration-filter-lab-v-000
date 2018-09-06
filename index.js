const findMatching = (drivers, match) => {
  return [ ...drivers].filter(driver => match.toLowerCase() === driver.toLowerCase())
}

const fuzzyMatch = (drivers, match) => {
  return [ ...drivers].filter(driver => {
    return match.toLowerCase() === driver.substring(0, match.length).toLowerCase()
  })
}

const matchName = (drivers, match) => {
  return [ ...drivers].filter(driver => {
    return match.toLowerCase() === driver.name.substring(0, match.length).toLowerCase()
  })
}
