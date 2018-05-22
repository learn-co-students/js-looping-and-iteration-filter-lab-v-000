function findMatching(arr, str){
  return arr.filter(
    function(elem){
      return elem.toUpperCase() === str.toUpperCase();
    }
  );
}

function fuzzyMatch(arr, str){
  return arr.filter(
    function(elem){
      return elem.startsWith(str);
    }
  );
}

function matchName(arr, str){
  return arr.filter(
    function(obj){
      return obj.name === str;
    }
  );
}
