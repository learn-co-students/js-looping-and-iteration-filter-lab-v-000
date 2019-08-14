// Code your solution in this file
function findMatching (drivers, string) {
  return drivers.filter(function (name) {
    return name.toUpperCase() === string.toUpperCase();
  });
}

function fuzzyMatch (drivers, string) {
  let sliceIndex = string.length;
  return drivers.filter(function (name) {
    return string === name.slice(0, sliceIndex)
  });
}

function matchName (drivers, string) {
  return drivers.filter(function (obj) {
    return obj.name === string;
  });
}
