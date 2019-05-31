// Code your solution in this file
function findMatching(list, name){
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, partialName) {
  let lengthofName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthofName) === partialName;
  });
}

function matchName(list, name) {
  return list.filter(function (driverName) {
    return driverName.name.toLowerCase() === name.toLowerCase();
  });
}
