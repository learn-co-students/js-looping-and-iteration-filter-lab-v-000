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

    function findMatching(collection, name){
        return collection.filter(function(driver){
           return driver.toLowerCase() === name.toLowerCase()
         })
    }

    function  fuzzyMatch(drivers, string){
      return drivers.filter((driver) => driver.startsWith(string));
}

function matchName(drivers, string){
    return drivers.filter(function(driver){
      return driver.name.toLowerCase() === string.toLowerCase()
    })
  }
