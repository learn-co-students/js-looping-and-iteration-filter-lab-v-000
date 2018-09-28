function findMatching(drivers, string){
  
const result = drivers.filter(word => word.toLowerCase() === string.toLowerCase());

return result;
}


function fuzzyMatch(drivers, string){
  function fuzzy(word, string){
    const slength = string.length;
    const slicedWord = word.slice(0, slength)
    if (slicedWord === string){
      return word
    }
  }

  const result = drivers.filter(word => fuzzy(word, string));
  return result;
}

function matchName(drivers, string){
  const result = drivers.filter(word => word.name === string);
  return result;
}