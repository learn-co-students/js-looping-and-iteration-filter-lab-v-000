// Code your solution in this file

// take in arr and name, filter that array for matching (case insensitive) name, return matches in array
function findMatching(arr, name) {
  let newArr = arr.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
    return newArr;
};

// returns matches on first two letters, does not return anything on middle or last combos
function fuzzyMatch(arr, letters) {
  let newArr = arr.filter(combo => letters === combo.slice(0, 2))
    return newArr;
}

// accepts data, name, filters data for exact mathces in names, returns array of that data
function matchName(arr, name) {
  let newArr = arr.filter(driver => driver.name === name)
    return newArr;
}
