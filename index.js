// Code your solution in this file

function findMatching(drivers, string){
  let matches = [];
  for (const name of drivers){
    if (name.toLowerCase() === string.toLowerCase()){
      matches.push(name);
    }
  }
  return matches;
}

function fuzzyMatch(drivers, string){
  let matches = [];
  for (const name of drivers){
    if (name.startsWith(string)){
      matches.push(name);
    }
  }
  return matches;
}

function matchName(target, string){
  return target.filter(function (driver) {
    return driver.name === string;
  });

}
