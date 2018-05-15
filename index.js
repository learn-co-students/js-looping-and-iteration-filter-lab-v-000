// Code your solution in this file


function findMatching(collection, name) {

      return collection.filter(function (driverName) {
        return name.toLowerCase() === driverName.toLowerCase();
      })
}

function fuzzyMatch(collection, lettersInput){
        // set the length of the collection element equal to the input letters
        let lengthOfName = lettersInput.length;
        //setup the filter function
        return collection.filter(function (driverName) { //driverName is just the variable to represent each element during the iteration over the collection
            return driverName.slice(0, lengthOfName) === lettersInput
            //We can provide two arguments to .slice(), the index where the slice should begin and the index before which it should end:
        })
}

//this function now changes slightly from findMatching() because the array of drivers is now an object that contains keys and values.
function matchName(collection, name){  //stays the same
    return collection.filter(function (driver){ //we iterate over the object and return the driver along with its attributes
        return driver.name.toLowerCase() === name.toLowerCase()
        //access the driver.name attribute, set it to lowercase, then compare that to the name argument name given into the function
    })
}
