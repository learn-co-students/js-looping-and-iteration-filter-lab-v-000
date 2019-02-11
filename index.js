function findMatching(list, arg) {
  return list.filter(function (item) {
    return item.toLowerCase() === arg.toLowerCase();
  });
}

function fuzzyMatch(list, arg) {
  return list.filter(function (item) {
    return item.slice(0, arg.length).toLowerCase() === arg.toLowerCase();
  });
}

function matchName(list, arg) {
  return list.filter(function (item) {
    return item.name.toLowerCase() === arg.toLowerCase();
  });
}
