// Code your solution in this file
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (collection, driver) {
    return collection.filter(function (driverName) { 
        return driverName.toLowerCase() === driver.toLowerCase();
    });
} 
    
function fuzzyMatch (collection, driver) {
    return collection.filter(function (driverName) {
        return driverName.slice(0, 1) === driver.slice(0, 1); 
    });
}

// So fuzzyMatch filters the collection to see how the argument passed through the filter 
// compares with the argument passed through fuzzyMatch (presumably referring to an existing declared object)
//driverName is kind of a proxy for the driver

function matchName (collection, driver) {
    return collection.filter(function (driverName) {
        return driverName.name.toLowerCase() === driver.toLowerCase(); 
    });
}

//ME The JS engine is telling matchName to return the collection with the specific name attribute that matches 
// a string in the whole driver object??? 

// function matchName (list, name) {
//     return list.filter(function (driver) {
//         return driver.name.toLowerCase() === name.toLowerCase();
//     });
// }




// for (const char of 'Hello, world!') {
//     console.log(char);
// }
 
// // LOG: H
// // LOG: e
// // LOG: l
// // LOG: l
// // LOG: o
// // LOG: ,
// // LOG:
// // LOG: w
// // LOG: o
// // LOG: r
// // LOG: l
// // LOG: d
// // LOG: !

// https://learn.co/tracks/full-stack-web-development-v6/javascript/looping-and-iteration/object-iteration



