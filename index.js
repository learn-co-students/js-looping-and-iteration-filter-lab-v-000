function findMatching(array, string) {
  let result = [];
  for (const e of array) {
    let lowerCaseName = e.toLowerCase();
    let lowerCaseString = string.toLowerCase();
    if (lowerCaseName === lowerCaseString) {
      result.push(e);
    }
  }
  return result;
 }

 function fuzzyMatch(array, string) {
  let re = new RegExp(string);
  // let result = array.filter(function(name) {
  //   return name.match(re);
  // });
  // return result;
 }

 function matchName(array, string) {

 }
