// Code your solution in this file
function findMatching(names, string) {
  return names.filter(
    function (name) {
      return name.toLowerCase() === string.toLowerCase();
    }
  );
}

function fuzzyMatch(names, string) {
  return names.filter(
    function (name) {
      return name.slice(0,2) === string;
  });
}

function matchName(drivers, string) {
  return drivers.filter(
    function (driver) {
      return driver.name === string;
    }
  );
}
