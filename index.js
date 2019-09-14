function findMatching(array, item) {
  const result = array.filter( function (element) {return element.toLowerCase() == item.toLowerCase() });
  return result;
}


function fuzzyMatch(array, item) {
  const result = array.filter(function (element) { return element.startsWith(item)});
  return result;
}


function matchName(array, item) {
  const result = array.filter(function (element) {return element["name"] === item} );
  return result;
}
