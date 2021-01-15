function findMatching(drivers, string) {
    return drivers.filter(function (el) {
        return el.toLowerCase().indexOf(string.toLowerCase()) > -1;
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (el) {
        return el.toLowerCase().indexOf(string.toLowerCase()) > -1 && el.toLowerCase().indexOf(string.toLowerCase()) < 2;
    })
}

function matchName(drivers, string) {
    return drivers.filter(function(el)  {
        return el.name === string;
    })
}
