// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function(x) { return x.toLowerCase() == name.toLowerCase()});
};


function fuzzyMatch(drivers, x) {
  return drivers.filter(function(y) {
    return y.slice(0,2).includes(x)
  });
}

function matchName(drivers, x) {
  return drivers.filter(function(y) {
    return y.name == x
  });
}
