function findMatching(array, name) {
  return array.filter(
    function(ar) {
      return ar.toLowerCase() === name.toLowerCase();
    }
  );
}

function fuzzyMatch(array, letters) {
  return array.filter(
    function(ar) {
      return ar.startsWith(letters);
    }
  );
}

function matchName (drivers, string) {
  return drivers.filter(
    function(driver) {
      return driver.name === string;
    }
  );
}
