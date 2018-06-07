// Code your solution in this file
function findMatching(namesArray, name){
    const matches = [];
    const lowercaseName = name.toLowerCase();

    for (const n of namesArray) {
        if (lowercaseName === n.toLowerCase()) {
            matches.push(n);
        }
    }

    return matches;
}

function fuzzyMatch(namesArray, nameStart){
    const matches = [];
    
    for (const n of namesArray) {
        let isMatch = true;

        for (let i = 0; i < nameStart.length; i++) {
            if (nameStart[i] !== n[i]) {
                debugger;
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            matches.push(n);
        }
    }

    return matches;
}

function matchName(people, name) {
    matches = [];

    for (const person of people) {
        if (person.name === name) {
            matches.push(person);
        }
    }

    return matches;
}