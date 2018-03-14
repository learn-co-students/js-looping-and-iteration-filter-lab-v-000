// Code your solution in this file

function findMatching(obj, name) {
  return obj.filter(function (match) {
    return match.toLowerCase() === name.toLowerCase()
  });
}

function fuzzyMatch(obj, name) {
  return obj.filter(function (match) {
    return match.indexOf(name) > - 1 && name[0] === name[0].toUpperCase()
  });
}

function matchName(obj, name) {
  return obj.filter(function (match) {
    return match.name === name
  });
}
