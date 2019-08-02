// Code your solution in this file
function findMatching(ar, search){
  const upCase = search.toUpperCase()
  return ar.filter((element) => { return element.toUpperCase() === upCase })
}
function fuzzyMatch(ar, search){
    const searchLen = search.length
    return ar.filter((element) => { return element.slice(0,searchLen) === search })
}
function matchName(ar, search){
  return ar.filter((element) => {
    return element.name === search
  })
}
