function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, partialName) {
  let lengthName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthName) === partialName
  })
}

function matchName(list, name) {
  return list.filter(function (driverName) {
    return driverName.name.toLowerCase() === name.toLowerCase()
  })
}