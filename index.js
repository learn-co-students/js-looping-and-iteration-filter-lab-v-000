// Code your solution in this file
function findMatching(arr, str){
  return arr.filter(el => el.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(arr, str){
  return arr.filter(el => el[0] === str[0]);
}

function matchName(arr, str){
  return arr.filter(el => el.name === str);
}