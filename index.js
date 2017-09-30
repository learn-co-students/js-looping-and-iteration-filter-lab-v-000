// Code your solution in this file
function findMatching(drivers, string){

  return drivers.filter(function (name) {return name.toLowerCase()===string.toLowerCase();})

}

function fuzzyMatch(drivers, string){

  return drivers.filter(function(name){
    let stringLength = string.length
    return name.substring(0, stringLength) === string
  });

};

function matchName(drivers, string){
  return drivers.filter(function(obj){
    return obj.name === string
  });
};
