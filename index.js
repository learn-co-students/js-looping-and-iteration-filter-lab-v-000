// Code your solution in this file

function findMatching(drivers, name) {
    const newCollection = [];
    
    for (const driver of drivers) {
        
        if (driver.toUpperCase() === name.toUpperCase()) {
          newCollection.push(driver);
        }
      }
     
      return newCollection;
}

function fuzzyMatch(drivers, fuzz) {
    const newCollection = [];
    
    for (const driver of drivers) {
        
        if (driver[0] + driver[1] === fuzz) {
          newCollection.push(driver);
        }
      }
     
      return newCollection;

}

function matchName(drivers, name) {
    const newCollection = [];
    
    for (const driver of drivers) {
          
        if (driver.name === name) {
            
          newCollection.push(driver);
        }
      }
     
      return newCollection;
}