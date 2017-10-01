// Code your solution in this file

const findMatching = (list, name) =>
  list.filter(driverName => driverName.toLowerCase() === name.toLowerCase());

const fuzzyMatch = (list, partialName) => {
  const lengthOfName = partialName.length;
  return list.filter(driverName => driverName.slice(0, lengthOfName) === partialName);
};

const matchName = (list, name) =>
  list.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
