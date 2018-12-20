function findMatching(drivers, str) {
  let array = []
  for (const d of drivers) {
    if (d.toLowerCase() === str.toLowerCase() ) {
      array.push(d)
    }
  }
  return array
}

function fuzzyMatch(drivers, str) {
    let array = []
    for (const d of drivers) {
      if (d.toLowerCase().slice(0, str.length) === str.toLowerCase() ) {
        array.push(d)
      }
    }
    return array
}

function matchName(drivers, str) {
  let array = []
  for (const d of drivers) {
    if (d.name.toLowerCase() === str.toLowerCase() ) {
      array.push(d)
    }
  }
  return array
}
