// Code your solution in this file
function findMatching(drivers, string){
  const upCase = string.toUpperCase()
  return drivers.filter((element) => { return element.toUpperCase() === upCase })
}
function fuzzyMatch(drivers, string){
    const strLen = string.length
    return drivers.filter((element) => { return element.slice(0,strLen) === string})
}
function matchName(drivers, string){
  return drivers.filter((element) => {
    return element.name === string
  })
}
