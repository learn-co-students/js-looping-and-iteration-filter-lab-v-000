// Code your solution in this file
function findMatching (array, text) {
let arr = array;
let txt = text;
  new_array = arr.filter(a => a.toLowerCase() === txt.toLowerCase());
  return new_array;
}

function fuzzyMatch (array, text) {
  let arr = array;
  let txt = text;
  new_array = arr.filter(a => a.slice(0,2) === txt.slice(0,2));
  return new_array
}
