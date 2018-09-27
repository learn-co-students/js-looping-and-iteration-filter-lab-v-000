// Code your solution in this file

function findMatching(array, name)
{
  return array.filter(function (driverName)
  {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}


function fuzzyMatch(array, name)
{
  let lengthOfName = name.length;
  return array.filter(function(driverName)
  {
    return driverName.slice(0, lengthOfName) === name;
  }
);
}

function matchName(array, name)
{
  return array.filter(function(driver)
  {
    return driver.name.toLowerCase() === name.toLowerCase();
  }
);
}
