// Code your solution in this file
function findMatching(list, value){
    return list.filter( (ele) => {return ele.toUpperCase() === value.toUpperCase()}  )
}

function fuzzyMatch(list, value){
  return list.filter( (ele) => { return ele.slice(0, 2).toUpperCase()  === value.slice(0, 2).toUpperCase()  })
}


function matchName(list, value){
  return list.filter( (ele) => {return ele['name'].toUpperCase() === value.toUpperCase() })
}
