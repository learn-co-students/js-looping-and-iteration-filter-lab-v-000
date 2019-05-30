// Code your solution in this file

function findMatching(drivers, name) {
    const newDrivers = drivers.filter(function (driv) {
      return (driv.toLowerCase() === name.toLowerCase());
    })

    return newDrivers;
}

function fuzzyMatch(drivers, str) {
  const newDrivers = drivers.filter(function (driv) {
    return (driv.slice(0, 2) === str);
  })

  return newDrivers;
}

function matchName(drivers, name) {
  const newDrivers = drivers.filter(function(driv) {
    return (driv.name === name);
  })

  return newDrivers;
}
