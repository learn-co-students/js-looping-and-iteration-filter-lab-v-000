// Code your solution in this file

function findMatching(drivers, name) {
  const newArray = [];
  for (const user of drivers) {
    if (user.toLowerCase() == name.toLowerCase()) {
      newArray.push(user)
    }
  }
  return newArray;
};

function fuzzyMatch(drivers, letters) {
  const newArray = [];
  for (const user of drivers) {
    if (user.startsWith(letters)) {
      newArray.push(user)
    }
  }
  return newArray;
};

function matchName(drivers, name) {
  const newArray = [];
  for (const user of drivers) {
    if (user.name == name) {
      newArray.push(user);
    }
  }
  return newArray;
}
