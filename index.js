function findMatching(drivers, name){
  let matches = []  
  for (let driver of drivers){
    if (match(driver, name)) {
      matches.push(driver)
    } else 
    if (matchAnyCase(driver, name)){
      matches.push(driver)
    }
  }
  return matches
}

function match(name1, name2){
  if (name1 === name2){
    return name1
  }
}

function matchAnyCase(name1, name2){
  if (name1.toLowerCase() === name2.toLowerCase()){
    return name1
  }
}

function fuzzyMatch(drivers, string){
  let matches = []
  for (let driver of drivers){
    if (matchString(driver, string)){
      matches.push(driver)
    }
  }  
  return matches
}

function matchString(driver, string){
  if (driver.slice(0,string.length) === string){
    return driver
  }
}

function matchName(drivers, name){
  let matches = []
  for (const driver of drivers) {
    if (match(driver.name, name)){
      matches.push(driver)
    }
  }
  return matches
}