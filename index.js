// Code your solution in this file

function findMatching(list, name) {
    return list.filter(function (drivName) {
        return drivName.toLowerCase() === name.toLowerCase();
      });
}


function fuzzyMatch(list, partialName) {
    let lengthOfName = partialName.length;
    return list.filter(function (dName) {
      return dName.slice(0, lengthOfName) === partialName;
    });

}


function matchName (list, name) {
    return list.filter(function (drvr) {
      return drvr.name.toLowerCase() === name.toLowerCase();
    });
  }