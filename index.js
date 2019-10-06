function findMatching(collection,name){
  const new_drivers = []
  for(const driver of collection){
    if (driver.toUpperCase()==name.toUpperCase()){
    new_drivers.push(driver)
    }
  }
  return new_drivers
}

function fuzzyMatch(collection,partialName){
  const new_drivers=[]
  let nameLength=partialName.length
  return collection.filter(function (driverName){
    return driverName.slice(0, nameLength) === partialName
  } )
}


function matchName (collection, name) {
  return collection.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
