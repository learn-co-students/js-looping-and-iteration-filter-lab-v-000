// Code your solution in this file

function findMatching(array,driver){
  return array.filter(function (name) { return name.toLowerCase() === driver.toLowerCase(); });

}

function fuzzyMatch(array,letter){
  const number = letter.length
  if (number > 1){
    return array.filter(function (name) { return name.slice(0,number).toLowerCase() === letter.toLowerCase(); });

  } else {
    return array.filter(function (name) { return name[0].toLowerCase() === letter.toLowerCase(); });
  }

}

function matchName(drivers, name){
  return drivers.filter(function (driver){ return driver.name === name });
}
