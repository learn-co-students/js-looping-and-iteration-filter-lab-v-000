function findMatching(drivers, name) {
return drivers.filter(x => x.toLowerCase().includes(name.toLowerCase()))
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(x => (x[0]+x[1]).toLowerCase().includes(name.toLowerCase()))
}

function matchName(drivers, string) {
  return drivers.filter(x => x.name === string)
}
