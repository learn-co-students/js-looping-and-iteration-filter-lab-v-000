// Code your solution in this file
function findMatching(drivers, value) {
    const newDrivers = []
    for (const name of drivers){
      if (name.toLowerCase() == value.toLowerCase()){
        newDrivers.push(name)
      }

    }
    return newDrivers
}


function fuzzyMatch(drivers, value) {
  const newDrivers = [];
  for (const name of drivers){
    if( name.substring(0,2) == value.substring(0,2)){
      newDrivers.push(name);
    }

  }

  return newDrivers;
}

function matchName(drivers, value) {
  const newDrivers = [];
  for (const object in drivers){
    if (drivers[object].name == value){
      newDrivers.push(drivers[object])
    }
  }
  return newDrivers;
}
