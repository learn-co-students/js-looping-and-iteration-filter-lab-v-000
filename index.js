// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter(function (objName) {return objName.toUpperCase() === name.toUpperCase();});
}

function fuzzyMatch(arr, argument) {
  return arr.filter(function (objName) {
    return objName.startsWith(argument);
  });
}

function matchName(obj, name) {
  return obj.filter(function (objName) {
    return objName.name === name;
  });
}