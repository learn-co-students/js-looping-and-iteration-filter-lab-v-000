// Code your solution in this file
function findMatching(someArray, name) {
  return someArray.filter(function (someName){
    return someName.toLowerCase() == name.toLowerCase();
  })
}


function fuzzyMatch(someArray, str){
  return someArray.filter(function(someStr) {
    return someStr[0] == str[0];
  })
}

function matchName(someArray, str){
  return someArray.filter(function(item){
      return item.name == str;
  })
}
