const findMatching = (drivers, string) => {
  return drivers.filter((name) => {
    return name.toLowerCase() === string.toLowerCase();
  })
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter((name) => {
    return name.charAt(0) === string.charAt(0)
  })
}

const matchName = (drivers, string) => {
  return drivers.filter((element) => {
    return element.name === string
  })
}