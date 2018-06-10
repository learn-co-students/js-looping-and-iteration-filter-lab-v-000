// Code your solution in this file

function findMatching(arr, str){
    return arr.filter(driver => {
        return driver.toUpperCase() === str.toUpperCase();
    });
};

function fuzzyMatch(arr, str){
    return arr.filter(driver => {
        return driver.slice(0, str.length) === str;
    })
};

function matchName(arr, str){
    return arr.filter(driver => {
        return driver.name === str;
    })
};