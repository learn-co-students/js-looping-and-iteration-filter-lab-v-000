// Code your solution in this file

function findMatching(drivers, string) {
    const match = drivers.filter(function (name) {
      return name.toUpperCase() == string.toUpperCase()})

    return match;
}


function fuzzyMatch(drivers, string) {
  const fuzzy = drivers.filter(function (name) {
    return name.startsWith(string)});

  return fuzzy;
}

function matchName(drivers, string){
    const match = drivers.filter(function(name) {
      return name.name === string});

    return match;
    }
