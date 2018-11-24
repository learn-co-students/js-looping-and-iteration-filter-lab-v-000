// Code your solution in this file

function findMatching(list, name){
  return list.filter(driverName => {
    return driverName.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch(list, lett){
  return list.filter(letter => {
    return letter.slice(0, lett.length) === lett;
  })
}

function matchName(list, name){
  return list.filter(driverName => {
    return driverName.name.toLowerCase() === name.toLowerCase();
  });
}
