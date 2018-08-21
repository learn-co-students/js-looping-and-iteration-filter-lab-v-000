// Code your solution in this file
// fingmatching take array of drivers
// and string as arguments
// return matching list of drivers
//function fuzzyMatch(drivers,string){
//    drivers.filter(function(st){
//    return string === st;
//  }
//}
function findMatching(drivers,string){
return drivers.filter(function(st){
    return string.toLowerCase() === st.toLowerCase();
  })
}

//function findMatching(drivers,string){
//const newArray = [];
//for(const st of drivers){
//  let st1 = st.toLowerCase();
//  let st2 = string.toLowerCase();
//  if(st1 === st2){
//    newArray.push(st);
//  }
// }
// return newArray;
// }

// function fuzzyMatch(drivers, string){
// const newArray = [];
// for(const st of drivers){
// const  lengthof = string.length;
// const start = st.slice(0,lengthof);
// const startLower = start.toLowerCase();
// const stLower = st.toLowerCase();
// if(stLower === startLower){
//   newArray.push(st);
// }
// }
// return newArray;
// }

function fuzzyMatch(drivers,string){
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
