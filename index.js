function findMatching(drivers, name) {
  const result = drivers.filter(function(driver) {
    return driver.toLowerCase().indexOf(name.toLowerCase()) > -1;
  })
  return result;
}

function fuzzyMatch(drivers, string) {
  const result = drivers.filter(function(driver) {
    return driver.toLowerCase().startsWith(string.toLowerCase());
  })
  return result;
}

function matchName(drivers, string) {
  const result = drivers.filter(function(driver) {
    return driver.name.toLowerCase().indexOf(string.toLowerCase()) > -1;
  })
  return result;
}
