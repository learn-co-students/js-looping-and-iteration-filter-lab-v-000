// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (name) {return name.toLowerCase() === string.toLowerCase()});


  // let names = []
  // for (const name of drivers) {
  //   if (name.toLowerCase() === string.toLowerCase()) {
  //     names.push(name)
  //   }
  // }
  // return names
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (name) {return name.slice(0, string.length) === string} )

  // let names = []
  // for (const name of drivers) {
  //   if (name.slice(0, string.length) === string) {
  //     names.push(name)
  //   }
  // }
  // return names
}

function matchName(drivers, string) {
  return drivers.filter(function (name) {return name.name === string})


  // let names = []
  // for (const name of drivers) {
  //   if (name.name === string) {
  //     names.push(name)
  //   }
  // }
  // return names
}
