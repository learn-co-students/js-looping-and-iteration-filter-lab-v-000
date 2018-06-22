// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(
    function (name){return name.toUpperCase() === string.toUpperCase()}
  );
}

function fuzzyMatch(drivers,string){
  return drivers.filter(
    function (name){
      return (name[0] === string[0]) && (name[1] === string[1])
    }
  );
}

function matchName(drivers,string){
  return drivers.filter(
    function (object){
      return object.name === string;
    }
  );
}
