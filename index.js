// Code your solution in this file

function findMatching(ar, name) {
  return ar.filter(function(el)
  {
    return el.toLowerCase()===name.toLowerCase();
  }
)
}


function fuzzyMatch(ar, name) {
  return ar.filter(function(el)
  {
    return el.toLowerCase().charAt(0)===name.toLowerCase().charAt(0);
  }
)
}

function matchName(ar, name) {
  return ar.filter(function(el) {
    return el.name===name;
  })
}
