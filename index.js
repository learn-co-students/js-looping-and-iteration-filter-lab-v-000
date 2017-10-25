// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
 });
}

/*
we have a function that takes in two arguments: an array of drivers
names, and a group of letters.

We want to return the names of the drivers
who names begin with the letters.

We establish an inital variable that represents the length of the
group of letters.

Now we want to use our .filter() to iterate through our array of
drivers.  We are passing in a function that will sort each driverName

we want to return the name of each driver that begins with Sa. So we want to
look at the first letter (0) and then the second letter (partialName)
driverName.slice(0, partialName) === letters
*/

function fuzzyMatch(array, letters) {
  let partialName = letters.length;
  return array.filter(function(driverName) {
    return driverName.slice(0, partialName) === letters;
  });
}

/*
So we .filter() through the array. We have a function that wants to
return the variable, driverName that is equal to the arguement, string.
We want to return the name regardless if it's capitalized or not. 
*/

function matchName(array, string) {
  return array.filter(function(driverName) {
    return driverName.name.toLowerCase() == string.toLowerCase()
  });
}
