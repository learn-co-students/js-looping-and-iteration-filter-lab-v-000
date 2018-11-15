// Code your solution in this file
function findMatching (collection, name) {
  let newCollection = [];

  for (let user of collection) {
    if (user.toLowerCase() === name.toLowerCase()) {
      newCollection.push(user);
    }
  }

  return newCollection;
};


function fuzzyMatch (collection, substring) {
  let newCollection = [];
  let lowerSubstring = substring.toLowerCase();
  let firstSubLetter = lowerSubstring[0];

  for (let user of collection) {
    let lowerUser = user.toLowerCase();
    let firstLetter = lowerUser[0];

    if (firstLetter === firstSubLetter) {
      if (lowerUser.indexOf(lowerSubstring) !== -1) {
        newCollection.push(user);
      }
    }
  }
  return newCollection;
};

function matchName(collection, name) {
  return collection.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
};
