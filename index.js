// Code your solution in this file
function findMatching(drivers,string){
  const newCollection = [];
  for (const driver of drivers){
    if(driver.toLowerCase() == string.toLowerCase()){
    newCollection.push(driver);
    }
  }
  return newCollection;

}

function fuzzyMatch(drivers,string){
  const fuzzyMatch = [];
  let length = string.length;
  for( const driver of drivers ){
    if(driver.slice(0,length) === string){
      fuzzyMatch.push(driver);
    }
  }
  return fuzzyMatch;
}
function matchName(drivers,string){
  const newCollection = [];
  for (const driver of drivers){
    if(driver.name.toLowerCase() == string.toLowerCase()){
    newCollection.push(driver);
    }
  }
  return newCollection;

}
