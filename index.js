// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(el) {
    return el.toLowerCase() === string.toLowerCase(); 
  })
}

function fuzzyMatch(drivers, string) {
  let nameLength = string.length
  return drivers.filter(function (el) {
    return el.slice(0, nameLength) === string;
  })
}

function matchName(drivers, string) {
  return drivers.filter(function(el) {
    return el.name === string; 
  });
}
