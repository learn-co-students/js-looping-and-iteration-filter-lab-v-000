// Code your solution in this file
function findMatching(collection, name){
  return collection.filter(function(driverName){

    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(arr, query){
  return arr.filter(function(Ab){
    return (query.includes(Ab[0]));
  })
}  


function matchName(arr, name){
  return arr.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}




