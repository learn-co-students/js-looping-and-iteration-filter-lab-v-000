// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, name)
{
  return drivers.filter(function (driverName) {
     return driverName.toLowerCase() === name.toLowerCase();
   });
}

function fuzzyMatch(drivers, fname){
  return drivers.filter(function (el){
    return el.slice(0,fname.length) === fname; });//we can also use return el.startWith(fname);
}


function matchName(drivers, name)
{
 return  drivers.filter(function(el)
{
  return el.name === name;
});
}
