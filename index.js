// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function (element) {return element.toLowerCase() === string.toLowerCase() })
}

function fuzzyMatch(array, string) {
   const numberOfCharactersToCheck = string.length
   const matches = []
//   for (const element of array) {
//
//   for (let i=0;i<numberOfCharactersToCheck;i++)
//   { if (doesLetterMatch(element,string.slice(i,i+1),i+1)) {}
//     else {
//
//     }
//     matches.push(element);
//   }
// }
// return matches
  for (const element of array) {
    if (element.slice(0,string.length) === string)
    {matches.push(element)}

  }
  return matches
}

function matchName(array, name) {
  const matches = []
  for (const element of array) {
    if (element['name'] === name) {
      matches.push(element);
    }

  }
  return matches;
}

function doesLetterMatch(string, letter, position) {
  return string.slice(position-1,position) === letter
}

function whichLettersMatch(string, letter) {
  array_of_matches = []
  for (const char of string)
  { if (char === letter) {
    array_of_matches.push(char);
  }

  };
return array_of_matches;
}
