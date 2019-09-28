// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter(word => word.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(arr, name) {
  return arr.filter((word) => {
    for(let i = 0; i < name.length; i++) {
      if(name[i] !== word[i]) { return false; }
    }
    return true;
  })
}

function matchName(arr, name) {
  return arr.filter(obj => obj.name === name)
}
