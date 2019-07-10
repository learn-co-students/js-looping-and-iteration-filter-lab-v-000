// Code your solution in this file
  function findMatching(drivers, string) {
    // just like rubys select enumerators
    // how I think about it ->
    // |driver| {driver.toLowerCase() === aString.toLowerCase()}
  let result = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase() );

  return result;

}

  function fuzzyMatch(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.startsWith(string);
    })
  }

  function matchName(drivers, string) {
    let result = drivers.filter(driver => driver.name === string );

    return result;

  }
