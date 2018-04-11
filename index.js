// Code your solution in this file
function findMatching(drivers, string){
  const matching = drivers.filter(function(name){return name.toLowerCase() == string.toLowerCase()});
  return matching;
}
function fuzzyMatch(drivers, string){
  const matching = drivers.filter(function(letter){return letter.substring(0,2) === string.substring(0,2)});
  return matching;
}
function matchName(drivers, person){
  const matching = drivers.filter(function(match){return match.name === person});
  return matching;
}
