// Code your solution in this file
function findMatching (drivers, string) {
  var result = drivers.filter(function(driver){
    return driver.toUpperCase().includes(string.toUpperCase());
  });

  return result;
}

function fuzzyMatch (drivers,string){
  var newCollection = [];
    for (const driver of drivers){
  if (driver.substring(0,2) === string.substring(0,2)) {
    newCollection.push(driver);
  }
}

return newCollection;
}




function matchName (drivers,string) {
  var newCollection = [];
    for (const driver of drivers){
  if (driver.name === string) {
    newCollection.push(driver);
  }
}

return newCollection;

}

