function findMatching(ary, str) {
  return ary.filter(e => e.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(ary, str) {
  return ary.filter(e => e.substring(0, 2).match(str));
}

function matchName(ary, str) {
  return ary.filter(e => e.name.match(str));
}
