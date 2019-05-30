function findMatching (drivers, string) {

  const names = drivers.filter( function(name) {
    return string.toUpperCase() === name.toUpperCase();
  });
  return names

}

function fuzzyMatch (drivers, string) {
  const stringLength = string.length;
  const names = drivers.filter( function(name) {
    return name.substring(0,stringLength) === string
  })
  return names;
}

function matchName (drivers, string) {
  const names = drivers.filter( function(driver) {
    return driver.name === string
  })
  return names
}
