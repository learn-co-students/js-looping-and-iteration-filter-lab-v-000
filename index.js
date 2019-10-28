function findMatching(list, string){
  return list.filter(function(name){return name.toLowerCase() === string.toLowerCase();});
};
function fuzzyMatch(list, string){
  return list.filter(function(name){return name.toLowerCase()[0] === string.toLowerCase()[0];});
};
function matchName(list, string){
  return list.filter(function(key){return key.name === string})
};
