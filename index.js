// Code your solution in this file
function findMatching(obj, str){
/*  const match = []
  for (const driver of obj) {
    if (driver == str) {
      match.push(driver)
      console.log(driver)
    }
  }
  return match
  */
  return obj.filter(
    function (name) {
      return name.toUpperCase() === str.toUpperCase()
    }
  )
}

function fuzzyMatch(obj, str){
  return obj.filter(
    function (name) {
      return name.substring(0, str.length) === str
    }
  )
}

function matchName(obj, str){
  return obj.filter(
    function (driver) {
      return driver.name === str
    }
  )
}
