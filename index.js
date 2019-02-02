// Code your solution in this file

function findMatching(variable, argument) {
  if (typeof argument === 'string') {
    return variable.filter(function (name) {
      return name.toLowerCase() === argument.toLowerCase();
    });
  } else {
    console.error('Argument type must be a string for function findMatching()');
  }
}

function fuzzyMatch(variable, argument) {
  if (typeof argument === 'string') {
    let converted = argument.charAt(0).toUpperCase() + argument.slice(1);
    return variable.filter(function (name) {
      return name.includes(converted);
    });
  } else {
    console.error('Argument type must be a string for function fuzzyMatch()');
  }
}

function matchName(variable, argument) {
  if (typeof argument === 'string') {
    let converted = argument.charAt(0).toUpperCase() + argument.slice(1);
    return variable.filter(function (object) {
      return object.name.includes(converted);
    });
  } else {
    console.error('Argument type must be a string for function matchName()');
  }
}
