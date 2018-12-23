// Code your solution in this file
//
// function findMatching(arr, name){
//   const n = []
//   for (const x of arr){
//     if (x.toLowerCase() === name.toLowerCase()){
//       n.push(x)
//     }
//   }
//   return n
// }

function findMatching(arr, name){
  return arr.filter(
    function(x){
      return x.toLowerCase() === name.toLowerCase()
    }
  )
}


function fuzzyMatch(arr, name){
  return arr.filter(
    function(x){
      return x.slice(0,name.length) === name
    }
  )
}

function matchName(arr, name){
  const n = []
  for (const x of arr){
    if (x.name === name){
      n.push(x)
    }
  }
  return n
}
