// Code your solution in this file
function findMatching(drivers, match) {
  let newMatch = drivers.filter(function(matches) {
    let check = match.toLowerCase();
    if (matches === match) {
        return matches === match;
    }
    else if (matches === check) {
        return matches === check;
    }
  } );
  return newMatch;
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function(name){return name.toLowerCase().indexOf(string.toLowerCase()) === 0;})
}

function matchName(drivers, string){
  let match = drivers.filter(function(strings){
    return strings.name === string
  })
  return match;
}