function findMatching(array, name) {
  return array.filter(function (driver) {return driver.toLowerCase() === name.toLowerCase()})
};

function fuzzyMatch(array, string) {
  let stringLength = string.length
  return array.filter(function (driver) {
    return driver.slice(0, stringLength) === string
  })
};

function matchName(array, name){
  return array.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
};
