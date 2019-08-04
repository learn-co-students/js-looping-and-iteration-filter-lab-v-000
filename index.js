// Code your solution in this file

// returns all drivers that match the passed in name ‣
// returns matching drivers if case does not match but letters do ‣
// returns an empty array if there is no match
function findMatching(arr, name) {
  return arr.filter(arr_name => arr_name.toLowerCase() === name.toLowerCase());
}

// returns a driver if beginning provided letters match ‣
// does not return drivers if only middle or ending letters match ‣
// does not return drivers if only middle or ending letters match
function fuzzyMatch(arr, str) {
  return arr.filter(arr_name => arr_name.startsWith(str));
}

// accesses the data structure to check if name matches
function matchName(arr, name) {
  return arr.filter(arr => arr['name'] === name);
}
