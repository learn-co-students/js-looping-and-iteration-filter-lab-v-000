// Code your solution in this file
function findMatching(coll, name){
    return coll.filter(function(value){
        return value.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(coll, str){
    return coll.filter(function(value){
        return value.substring(0, str.length) === str;
    });
}

function matchName(coll, name){
    return coll.filter(function(value){
        return value.name.toLowerCase() === name.toLowerCase();
    });
}