// Code your solution in this file

function findMatching(list, name){

  return list.filter(function(eName) {
    return eName.toLowerCase() === name.toLowerCase();
  });

}

function fuzzyMatch (list, partName) {

  let partNameLength = partName.length;

    return list.filter(function(eName) {
      return eName.slice(0, partNameLength) === partName;
    })
}

function matchName(list, name) {
  return list.filter(function (element) {
    return element.name.toLowerCase() === name.toLowerCase();
  })

}
