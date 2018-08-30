// Code your solution in this file
function findMatching(drivers, name){
  const newCollection = drivers.filter(function(driver) { return driver.toLowerCase() === name.toLowerCase(); })
  return newCollection
};

function fuzzyMatch(drivers, letters){
  const newCollection = drivers.filter(function(driver) { return driver.slice(0, letters.length) === letters })
  return newCollection
};

function matchName(drivers, name){
  const newCollection = drivers.filter(function(driver) { return driver.name === name })
  return newCollection
};
