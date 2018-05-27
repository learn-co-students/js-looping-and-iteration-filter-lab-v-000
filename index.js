// Code your solution in this file
const drivers =
[{name: "Bobby"},
{name: "Fred"},
{name: "tammy"}
]
newDriver = ["Ray", "Belle", "Frank"]

function matchName(drivers, value){
  let matching = drivers.filter(function(driver){
  return  driver.name == value
  })
  return matching
}

function findMatching(drivers, value){
  let matching = drivers.filter(function(driver){
    if(driver.toLowerCase() == value.toLowerCase()){
      return driver
    }

  })
  return matching
}


function fuzzyMatch(drivers, letter){
  let matching = drivers.filter(function(driver){
    if(driver.startsWith(letter)){
      return driver
    }

  })
  return matching
  }

// let newCollection = []

// function findMatching(value, driver){
//   for (let i = 0; i <= driver.length; i++){
//     if (value === driver[i].name){
//      newCollection.push(value)
//     }
//   }
//   return newCollection
// }
