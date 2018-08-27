// Code your solution in this file
function findMatching(drivers,string) {
  return drivers.filter(function(st){
    return string.toLowerCase() === st.toLowerCase();
  })
}

function fuzzyMatch(drivers,string) {
  const lengthof = string.length;
  return drivers.filter(function(st){
    return string === st.slice(0,lengthof);
  })
}

function matchName(drivers,string){
return drivers.filter(function(st){
  return st.name === string;
})
}
