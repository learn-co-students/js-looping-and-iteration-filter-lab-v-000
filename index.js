// Code your solution in this file
function findMatching(collection, name){
  return collection.filter(function(driverName){

     return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(array, letters){
  return array.filter(function(Ab){
    return (letters.includes(Ab[0]));
  })
}

function matchName(collection, name){
  return collection.filter(function(driver){

    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
