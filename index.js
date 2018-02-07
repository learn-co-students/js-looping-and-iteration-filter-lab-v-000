// Code your solution in this file
function findMatching(drives, name) {
    const newCollection = [];
 
    for (const user of drives) {
        if (user.toLowerCase()=== name.toLowerCase()) {
          newCollection.push(user);
        }
    }
     
    return newCollection;
}

function fuzzyMatch(drives, string) {
    const newCollection = [];
    const l = string.length;
    
    for (const user of drives) {
        if (user.slice(0,l)=== string) {
          newCollection.push(user);
        }
    }
    
    return newCollection;
    
}

function matchName(drives, name) {
    const newCollection = [];
   
    for (const user of drives) {
        if (user.name=== name) {
          newCollection.push(user);
        }
    }
    
    return newCollection;
    
}