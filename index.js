// Code your solution in this file

function findMatching(drivers, string) {
  return drivers.filter(function(name) {
    return name.toLowerCase().indexOf(string.toLowerCase()) > -1;
  })
 }

 function fuzzyMatch(drivers, string) {
   return drivers.filter(function(el) {
     return el.charAt().indexOf(string.charAt()) > -1;
   })
  }

function matchName(drivers, string) {
  return drivers.filter(function({name:value}) {
    return Object.is(value, string);
  })
}
