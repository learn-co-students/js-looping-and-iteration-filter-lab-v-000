// Code your solution in this file
function findMatching(drivers, driverName) {
  const names = drivers.filter(
    function (name) {
      return name.toLowerCase() === driverName.toLowerCase();
    }
  )

  return names;
}

function fuzzyMatch(drivers, letters) {
  const names = drivers.filter(
    function (name) {
      return name.substring(0, letters.length) === letters;
    }
  )

  return names;
}

function matchName(drivers, name) {
  const driversInfo = drivers.filter(
    function (driver) {
      return driver.name === name;
    }
  );

  return driversInfo;
}
