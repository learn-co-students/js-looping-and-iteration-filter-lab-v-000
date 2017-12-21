function findMatching(drivers, string){
    return drivers.filter(function(i) {
      return i.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(i){
    return i.slice(0, string.length) === string
  })
}

function matchName(drivers, name) {
  return drivers.filter( function(i){
    return i.name === name
  })
}
