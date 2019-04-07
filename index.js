// Code your solution in this file
function findMatching(drivers, name)
{
  const newDrivers = [];
  for (const driver of drivers)
  {
    if (driver.toLowerCase() === name.toLowerCase())
    {
      newDrivers.push(driver)
    }
  }
  return newDrivers;
}
function fuzzyMatch(drivers, letters)
{
  const newDrivers = drivers.filter(driver => driver.startsWith(letters))
  return newDrivers;
}
function matchName(drivers, name)
{
  const newDrivers = drivers.filter(driver => driver.name == name)
  return newDrivers;

}
