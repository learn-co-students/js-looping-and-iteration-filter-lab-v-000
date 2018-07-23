// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']; 

function findMatching(drivers, name) {
  return drivers.filter(function (findName) {
    return findName.toLowerCase() === name.toLowerCase();
  });
}


function fuzzyMatch(drivers, firstLetters) {
  let nameLength = firstLetters.length;
  return drivers.filter(function (findName) {
   return findName.slice(0, nameLength) === firstLetters;
    });
}

function matchName(drivers, name ) {
  return drivers.filter(function(findName) {
    return findName.name.toLowerCase() === name.toLowerCase();
  });
}






// function matchName()

