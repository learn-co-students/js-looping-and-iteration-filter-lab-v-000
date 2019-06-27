// Code your solution in this file

function findMatching (collection, value) {
  return collection.filter(function (element) {return element.toUpperCase() === value.toUpperCase()});
  }

function fuzzyMatch (collection, value) {
  return collection.filter(function (element) {return element.charAt() === value.charAt()}
    );
  }

function matchName (collection, value) {
  return collection.filter(function (element) {return element.value === value}
  );
}
