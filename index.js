// Code your solution in this file
function findMatching(arr, str) {
  return arr.filter(name => name.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(arr, str) {
  return arr.filter(name => name.startsWith(str));
}

function matchName(arr, str){
  return  arr.filter(driver => driver.name === str );
}
