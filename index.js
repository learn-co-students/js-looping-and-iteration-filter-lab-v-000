// Code your solution in this file
findMatching = (array, string) =>  {
  return array.filter(name => name.toLowerCase() === string.toLowerCase())

}
fuzzyMatch = (array, string) => {
  let b = array.filter(function(name) {
    if (name.split("")[0] === string.split("")[0]) {
      return name
    }

  })

  return b
}


matchName = (drivers, string) => {
  return drivers.filter((name) => {
    if(name.name === string) {
      return string
    }
  })
}
