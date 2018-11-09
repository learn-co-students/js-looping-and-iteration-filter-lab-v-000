// Code your solution in this file

function findMatching(drivers, string){
  let b = drivers.filter(function (d) { return d.toLowerCase() === string.toLowerCase()})
   return b
}

function fuzzyMatch(drivers, string){
  let n = string.length 
  return drivers.filter(function (d) { return d.slice(0,n) === string
  })
}

function matchName(drivers, string){
  return drivers.filter(function (d){
    return d.name === string 
  })
}