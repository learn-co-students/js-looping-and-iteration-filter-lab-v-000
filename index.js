// Code your solution in this file
function findMatching (drivers, string) {
  let newdrivers = drivers.filter(function (name) {return name.toUpperCase() === string.toUpperCase(); });
  return newdrivers;
}

function fuzzyMatch (drivers, string) {
  let newdrivers = drivers.filter(function (name) {return name[0] === string[0]; });
  return newdrivers;
}

function matchName (drivers, string) {
  let newdrivers = drivers.filter(function (element) {return element['name'] === string; });
  return newdrivers;
}
