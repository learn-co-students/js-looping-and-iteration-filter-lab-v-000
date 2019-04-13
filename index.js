
// returns all drivers that match the passed in name
// returns matching drivers if case does not match but letters do
// returns an empty array if there is no match

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
	return drivers.filter(function(el) { return el.toLowerCase().indexOf(string.toLowerCase()) > -1; })
}

// returns a driver if beginning provided letters match
// does not return drivers if only middle or ending letters match
// does not return drivers if only middle or ending letters match

function fuzzyMatch(drivers, string){
    return drivers.filter(function(el) { return el.startsWith(string); })
}

// accesses the data structure to check if name matches

function matchName(drivers, string) {
    return drivers.filter(function(el) {return el.name.match(string)})
}
