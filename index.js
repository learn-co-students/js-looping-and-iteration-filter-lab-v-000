// Code your solution in this file
function findMatching(data, query){
  return data.filter(function (thing) { if (thing.toLowerCase() == query.toLowerCase()){return query;} });
}

function fuzzyMatch(data, part){
  return data.filter(function(thing){if (part == thing.slice(0,part.length)){return thing;}});
}


function matchName(data, chosen){
  return data.filter(function(val){if(val['name'] == chosen){return val;}});
}
