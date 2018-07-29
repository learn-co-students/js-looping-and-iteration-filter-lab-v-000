function findMatching(drivers, matcher) {
  return drivers.filter(d => d.toLowerCase() === matcher.toLowerCase())
}

function fuzzyMatch(drivers, matcher) {
  return drivers.filter(d => d.slice(0,2).includes(matcher))
}

function matchName(drivers, matcher) {
  return drivers.filter(d => d.name === matcher)
}