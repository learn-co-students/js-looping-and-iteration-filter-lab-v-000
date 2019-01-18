// Code your solution in this file

function findMatching(drivers, str){
  return drivers.filter(function(el) {
    return el.toLowerCase() === str.toLowerCase();
  });
};

function fuzzyMatch(drivers, str) {
  return drivers.filter(function(el) {
    return el[0] === str[0];
  });
};

function matchName(drivers, str){
  return drivers.filter(function(el) {
    return el.name === str;
  });
}
