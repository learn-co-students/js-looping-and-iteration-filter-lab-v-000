// Code your solution in this file


function findMatching(drivers,string) {

  return  drivers.filter(function(name){return name.toUpperCase() === string.toUpperCase()})

}

function fuzzyMatch(drivers,letters) {

  return  drivers.filter(function(name){return name.slice(0,2).toUpperCase() === letters.toUpperCase()})

}


function matchName(drivers, string){
  return  drivers.filter(function(obj){return obj.name.toUpperCase() === string.toUpperCase() })
}
