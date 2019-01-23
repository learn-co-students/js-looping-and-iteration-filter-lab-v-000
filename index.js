// Code your solution in this file
function findMatching (array, name) {
  // returns the matching list of drivers. The function should be
  // case insensitive.
  return array.filter(function (element) {
    return element.toLowerCase().includes(name.toLowerCase());
  });
}
function fuzzyMatch (array, name) {
  // returns all drivers whose names begin
  // with the provided letters
  return array.filter(function (element) {
    return element.slice(0, 2).toLowerCase().includes(name.toLowerCase());
  });
}
function matchName (array, name) {
  // each element of the `drivers` array is a
  // JavaScript object that has a property of `name`. The function should return
  // each element whose `name` property matches the provided `string` argument.
  return array.filter(function (element) {
    return element['name'] === name;
  });
}
