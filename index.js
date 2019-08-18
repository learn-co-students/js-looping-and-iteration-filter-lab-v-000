// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function(name){return name.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(drivers, string){
  let lengthName = string.length;
  return drivers.filter(function(letters){
    return letters.slice(0, lengthName)===string;
  })
}

function matchName(drivers, string){
  return drivers.filter(function(obj){
    return obj.name === string;
  })

}
