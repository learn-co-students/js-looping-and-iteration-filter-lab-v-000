function findMatching(drivers, string) {
  return drivers.filter(function(item) { return item.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(item) { return item.slice(0, string.length) === string; });
}

function matchName(drivers, string) {
  return drivers.filter(function(item) { return item["name"].toLowerCase() === string.toLowerCase(); });
}
