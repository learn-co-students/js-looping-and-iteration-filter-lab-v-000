// Code your solution in this file

function findMatching(drivers, string) {
    const matchingStrings = drivers.filter(function (name) {
      return name.toUpperCase() == string.toUpperCase()})

    return matchingStrings;
}


function fuzzyMatch(drivers, string) {
  const fuzzyStrings = drivers.filter(function (name) {
    return name.startsWith(string)});

  return fuzzyStrings;
}

function matchName(drivers, string){
    const matchedNames = drivers.filter(function(name) {
      return name.name === string});

    return matchedNames;
    }
