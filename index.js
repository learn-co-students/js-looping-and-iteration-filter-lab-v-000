// Code your solution in this file
function findMatching(arr, name){
  return arr.filter(function (dname) {
    return name.toUpperCase() === dname.toUpperCase()
  });
}

function fuzzyMatch(arr, letters){
  return arr.filter(function (fletters) {
    return fletters.slice(0, letters.length) === letters
  });
}


function matchName(arr, name) {
  return arr.filter(function (element) {
    return element.name == name
  });
}
