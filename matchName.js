function matchName(drivers, string) {
  return drivers.filter(function (eDriver) {
    return eDriver.name === string;
  });
}
