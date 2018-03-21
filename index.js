// Code your solution in this file
function findMatching(array, string) {
  return array.filter(
    function (name) {
      if (name === string || name === string.toLowerCase()) {
        return name;
      }
    });
}

function fuzzyMatch(array, string) {
  return array.filter(
    function (name) {
      return name.slice(0, string.length) === string;
    }
  );
}

function matchName(array, string) {
  return array.filter(
    function (user) {
      return user.name === string;
    }
  );
}
