const findMatching = (drivers, name) => drivers.filter(driver=> name.toLowerCase() === driver.toLowerCase())

const fuzzyMatch = (drivers, str) => drivers.filter(driver=> driver.match(`^${str}`))

const matchName = (drivers, str) => drivers.filter(driver=> driver.name.match(str))
