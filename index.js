// Code your solution in this file
function findMatching(myArr, name) {
   return myArr.filter(function (item){
    return item.toUpperCase() === name.toUpperCase();
  })
}

function fuzzyMatch(myArr, bit) {
  return myArr.filter(function(item) {
    return item.slice(0,2) === bit;
  })
}

function matchName(myArr, given_name) {
  return myArr.filter(function(obj) {
    return obj["name"] === given_name;
  })
}
