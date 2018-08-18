// Code your solution in this file


function findMatching(drivers, name) {
    let matches = []
    for (const driver of drivers) {
      if (driver.toUpperCase() === name.toUpperCase()) {
        matches.push(driver)
      }
    }
    return matches
}


function fuzzyMatch(names, letters) {
  let len = letters.length; console.log('length', len); 
  let matches = []
  
  for (const name of names) {
    if (name.slice(0,len).toLowerCase() === letters.toLowerCase()) {
      matches.push(name)
    }
  }
  return matches
}


function matchName(drivers, name) {
	let matches = []
   for (const key in drivers) {
    if (drivers[key]['name'].toUpperCase() === name.toUpperCase()) {
      matches.push(drivers[key])
    }
  }
 return matches
}

