// Code your solution in this file

function findMatching(collection, string){
    return collection.filter(item => item.toLowerCase() === string.toLowerCase());
};



function fuzzyMatch(collection, string){
    return collection.filter((item)=>{
        return item.slice(0,string.length)=== string
    })
}

function matchName(collection, string){
    return collection.filter((item)=>{
        return item.name.toLowerCase() === string.toLowerCase();
  })
};
