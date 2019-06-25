// Code your solution in this file
function findMatching(collection, name){
  const result = collection.filter(element => element == name || element == name.toLowerCase());
  return result;
}

function fuzzyMatch(drivers, name){
  const result = drivers.filter(driver => driver.slice(0,2).includes(name));
  return result;
}

function matchName(drivers, person){
  const result = drivers.filter(driver => driver.name == person);
  return result;
}
