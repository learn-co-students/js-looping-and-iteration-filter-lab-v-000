// Code your solution in this file
let newDrivers=[]

function findMatching(drivers, name){
  newDrivers=[]
  newDrivers=drivers.filter(function(element){return element.toLowerCase()===name.toLowerCase()})
  return newDrivers
}

function fuzzyMatch(drivers, letters){
  newDrivers=[]
  newDrivers=drivers.filter(function(element){return element.slice(0,letters.length)===letters})
  return newDrivers
}

function matchName(drivers,string){
  newDrivers=[]
  newDrivers=drivers.filter(function(element){return element.name===string})
  return newDrivers
}
