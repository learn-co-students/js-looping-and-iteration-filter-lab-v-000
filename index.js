// Code your solution in this file
function findMatching (drivers, name) {
  const matchingDrivers = [];
  drivers.filter(function(driver) {
      if (name === driver) {
          matchingDrivers.push(name);
      }
      else if (name.toUpperCase() === driver.toUpperCase()){
          matchingDrivers.push(driver);
      }
    });

    return matchingDrivers;
};

function fuzzyMatch(drivers, name) {
  const matchingDrivers = [];
  drivers.filter(function(driver) {
      counter = 0;
      for (i = 0; i < driver.length; i++) {
        if (name[i] === driver[i]) {
          counter++;
          if (counter === name.length) {
            matchingDrivers.push(driver);
          }
        }
      }
  })
  return matchingDrivers;
};

function matchName(collection, name) {

  matchingDrivers = []

  for (const user of collection) {
    if (user.name === name) {
      matchingDrivers.push(user);
    }
  }
  console.log(matchingDrivers);
  return matchingDrivers;

};
