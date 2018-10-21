
function findMatching(drivers, name) {                  //This is a string, not an object w/properties.
  return drivers.filter(function (driverName) {         //return the drivers array & filter it to return individual string.(call the string driverName)
    return driverName.toUpperCase() === name.toUpperCase()    //return the driverName string to upper case that equals the name argument
  })                                                         //to upper case
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.startsWith(string))     //use the .startsWith()
}

//or
//function fuzzyMatch(drivers, string) {             //drivers array & string
//  let lengthOfName = string.length;               //set variable to the number of the length of the string
//  return drivers.filter(function (driverName) {     //return drivers array & filter it to return individual driver. set to driverName.
//    return driverName.slice(0, lengthOfName) === string   //return driverName & slice it to return letters starting a 0 index &
//  })                                                      //lasting for the lengthOfName variable
//}

function matchName(drivers, name) {                      //This is an object with a name property
  return drivers.filter(driver => driver.name === name)   //return drivers array & filter it to return individual driver whose
}                                                         //name property === the name passed in
