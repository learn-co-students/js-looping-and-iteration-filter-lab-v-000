function findMatching(drivers, name){
    return drivers.filter(n => n.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, query){
    return drivers.filter(function(n){
        return query.toUpperCase() === n.slice(0, query.length).toUpperCase();
    })
}

function matchName(drivers, query){
    return drivers.filter(o => o.name === query)
}