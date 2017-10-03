// Code your solution in this file
function findMatching(array, string) {
   return array.filter(function (num) {
     return num.toLowerCase() === string.toLowerCase();
   });
};
function fuzzyMatch(array, string){
  return array.filter(function (num) {
    return num.slice(0, string.length) === string
  });
};
function matchName(array, string){
  return array.filter(function (num){
    return num.name === string
  });
};
