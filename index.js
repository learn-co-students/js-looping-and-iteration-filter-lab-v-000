// Code your solution in this file


function findMatching (drivers, name) {
  return drivers.filter (function (x) {
    return x === name.toLowerCase() || x === name });
}

function fuzzyMatch (drivers, name) {
  return drivers.filter (function (x) {
    return x.startsWith(name);
  })
}

function matchName (drivers, str) {
  return drivers.filter (function(x) {
    return x.name === str;
  })
}

