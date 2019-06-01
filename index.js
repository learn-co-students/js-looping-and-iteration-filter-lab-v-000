// Code your solution in this file
function findMatching(arr, string) {
   
   return arr.filter(function(string) {return arr.ignoreCase() === string.ignoreCase();});
}

function fuzzyMatch(arr, string) {
    return arr.filter(function(el) {
        return el.ignoreCase().indexOf(string.ignoreCase()) !== -1;
    })
  }
  
 function matchName(arr, string) {

 }