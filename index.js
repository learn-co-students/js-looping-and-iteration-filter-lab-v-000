// Code your solution in this file


function findMatching(list,driverName){
return list.filter(function(name){ return name.toLowerCase() === driverName.toLowerCase()})
}

function fuzzyMatch(drivers,string){
  const line = string.length
  return drivers.filter(function(name){ return name.slice(0,line) === string})
}

function matchName(drivers,string){
  return drivers.filter(function(element){
    return element.name === string
  })

}
