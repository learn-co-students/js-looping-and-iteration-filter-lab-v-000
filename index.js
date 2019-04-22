// Code your solution in this file

function findMatching(drivers, string){
  const newArray = drivers.filter(function(element) {
    return element.toLowerCase() == string.toLowerCase()
    }
  );
  console.log(drivers, string, newArray);
  return newArray;
}

function fuzzyMatch(drivers, string){
  const newArray = drivers.filter(function(element){
    return element.toLowerCase().startsWith(string.toLowerCase());
  });
  console.log(drivers, string, newArray);
  return newArray;
}

function matchName(drivers, string){
  const newArray  = drivers.filter(function(elementObject){
    return elementObject.name.toLowerCase() === string.toLowerCase();
  });
  console.log(drivers, string, newArray);
  return newArray;
}