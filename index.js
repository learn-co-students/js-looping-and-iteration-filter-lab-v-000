function findMatching(driverList, name) {
  return driverList.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
};

function fuzzyMatch(driverList, partialName) {
  let nameLength = partialName.length;
  return driverList.filter(function(driverName) {
    return driverName.slice(0, nameLength) === partialName;
  });
};

function matchName(driverList, name) {
  return driverList.filter(function(driverName) {
    return driverName.name.toLowerCase() === name.toLowerCase();
  });
};
