// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (name) {return name.toLowerCase() === string.toLowerCase();})
}

function fuzzyMatch(drivers, string) {
  let length = string.length;
  return drivers.filter( function (name) {
    return name.slice(0, length) === string;
   })
}

function matchName(drivers, string) {
  return drivers.filter( function (obj) {
    return obj.name === string;
  })
}
