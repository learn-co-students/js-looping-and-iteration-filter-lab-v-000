// Code your solution in this file

function driverName() {
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

  for (const name of drivers) {
    console.log(name)
  }
}

function findMatching(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

// Set a nameLength variable to the length of the second argument, the partialName's length.
// Then pass in driverName function and slice the driverName (fullname returned from this function) starting from 0 index to whatever the nameLenth is.
// Compare sliced letters to partialName.

function fuzzyMatch(drivers, partialName) {
  let nameLength = partialName.length
  return drivers.filter(function(driverName) {
    return driverName.slice(0, nameLength) === partialName
  })
}

function driver() {
  const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  for (const key in drivers) {
    console.log(drivers[key])
  }
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
