// Code your solution in this file
findMatching = (drivers, name) => {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

fuzzyMatch = (drivers, letters) => {
  return drivers.filter(driver => driver.slice(0, letters.length) === letters)
}

matchName = (drivers, name) => {
  return drivers.filter(driver => driver.name === name)
}
