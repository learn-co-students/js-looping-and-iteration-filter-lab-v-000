// Code your solution in this file
function findMatching(drivers, string) {
    const matchingStrings = drivers.filter(function (s) {
      return s.toUpperCase() == string.toUpperCase()})

    return matchingStrings;
}


function fuzzyMatch(drivers, string) {
  const fuzzyStrings = drivers.filter(function (s) {
    return s.startsWith(string)});

  return fuzzyStrings;
}

function matchName(drivers, string){
    const matchedNames = drivers.filter(function(s) {
      return s.name === string});

    return matchedNames;
    }
