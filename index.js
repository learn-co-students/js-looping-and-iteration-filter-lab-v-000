function findMatching (list, name){
return list.filter(function (driverName) {
return driverName.toLowerCase() === name.toLowerCase();
});
}

function fuzzyMatch(list, nickName){
  let nameLength = nickName.length;
 return list.filter(function (driverName) {
return driverName.slice(0, nameLength) === nickName;
});
}

function matchName(list, name){
return list.filter(function (driver) {
return driver.name.toLowerCase() === name.toLowerCase();
});
}