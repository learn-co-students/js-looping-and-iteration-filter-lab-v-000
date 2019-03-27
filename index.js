// Code your solution in this file


function findMatching(obj, name) {
  return obj.filter(function(n) {return n.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(obj, beg_let) {
  num_let = beg_let.length
  return obj.filter(function(n) { return n.slice(0, num_let).toLowerCase() === beg_let.toLowerCase()})
}

function matchName(drivers, nam){
    return drivers.filter(function(n) { return n.name === nam })
}
