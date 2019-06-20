function findMatching(array, string) { 
return array.filter(name => name === string || name === string.toLowerCase());
}

function fuzzyMatch(array, string) { 
  return array.filter(name => name.slice(0, string.length) === string);
}

function matchName(array, string) { 
  return array.filter(name => name.name === string);
}