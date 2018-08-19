// Code your solution in this file
function findMatching(driverArray, name) {
   return driverArray.filter(function (driverName)
   { return driverName.toLowerCase() ===  name.toLowerCase() });
 }

 function fuzzyMatch(driverArray, partialNam) {
    let lengthOfPartialName  = partialNam.length;
    return driverArray.filter(function (driverName)
    { return driverName.slice(0,lengthOfPartialName).toLowerCase() ===  partialNam.toLowerCase() });
  }


  function matchName(driverArray, name) {
     return driverArray.filter(function (driverElement)
     { return driverElement.name.toLowerCase() ===  name.toLowerCase() });
   }
