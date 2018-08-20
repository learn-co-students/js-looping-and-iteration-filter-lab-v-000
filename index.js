// Code your solution in this file
function findMatching(array, name) {
  const newarray = array.filter(word => word.toLowerCase() === name.toLowerCase());
  return newarray;
}

function fuzzyMatch(array, string) {
  function match(word) {
    return word.slice(0, string.length).toLowerCase() === string.toLowerCase();
  }
  const newArray = array.filter(match);
  return newArray;
}

function matchName(array, name) {
  const newArray = array.filter(function (object) {return object['name'] === name})
  return newArray;
}
