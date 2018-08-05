// Code your solution in this file
function findMatching(aray, string){
  const newAray = [];
  for(const element of aray){
    if (element.toUpperCase() === string.toUpperCase()){
      newAray.push(element);
    }
  }
  return newAray;
}

function fuzzyMatch(aray, string){
  const newAray = [];
  for(const element of aray){
    if(element[0].toUpperCase() === string[0].toUpperCase()){
      newAray.push(element);
    }
  }
  return newAray;
}

function matchName(aray, string){
  const newAray = [];
  for(const element of aray){
    if(element["name"] ===  string){
      newAray.push(element);
    }
  }
  return newAray;
}
