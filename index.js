// Code your solution in this file


function findMatching(argument, string){
  return argument.filter(function(name) {
    return name.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(word, letter){
  return word.filter(function(holder) {
    return (holder.startsWith(letter));
  });
}

function matchName(word1, word2){
  return word1.filter(function(holder){
    return (holder.name === word2);
  });
}
