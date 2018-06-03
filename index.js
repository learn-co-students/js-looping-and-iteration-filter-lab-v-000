function findMatching(array, name){
  return array.filter(
    function(driverName){
      return driverName.toLowerCase() === name.toLowerCase();
    }
  );
}

function fuzzyMatch(array, letters){
  return array.filter(
    function (driverName){
      return driverName.slice(0, letters.length) === letters;
    }
  );
}

function matchName(array, name) {
  return array.filter(
    function(driverName){
      return driverName.name.toLowerCase() === name.toLowerCase();
    }
  );
}



/*function findMatching(collection, name) {
  let result = [];
  for (const user of collection) {
    if (name.toLowerCase() === user.toLowerCase()) {
      result.push(user);
    }
  }
  return result;
}

function fuzzyMatch(collection, letters) {
  let result = [];
  let lettersLength = letters.length;
  for (const name of collection) {
    if (name.substring(0, lettersLength) === letters) {
      result.push(name);
    }
  }
  return result;
}

function matchName(array, driverName) {
  let result = []
  let counter = -1;
  for (const element of array){
    counter++;
    for (const key in element){
      if (key === "name" && array[counter][key] === driverName){
        result.push(array[counter]);
      }
    }
  }
  return result;
}*/
