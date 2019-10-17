// Code your solution in this file

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

 function findMatching(drivers, string) {
    const newDrivers = drivers.filter (function (driver) {
     if (driver.toUpperCase() === string.toUpperCase()){
       return string;}
     });
     return newDrivers;
 }


function fuzzyMatch(drivers, chars){
  const fuzzyMatched = drivers.filter(driver => driver.startsWith(chars));
  return fuzzyMatched;
}


// Write matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.

function matchName(drivers, string){
  const nameMatched = drivers.filter(driver => driver.name === string);
  return nameMatched;
}
