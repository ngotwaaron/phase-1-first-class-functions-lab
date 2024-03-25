// Code your solution in this file!
// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers) {
  const twoDrivers = drivers.slice(0, 2);
  return twoDrivers;
};
const returnLastTwoDrivers = function (drivers) {
  const lastDrivers = drivers.slice(-2);
  return lastDrivers;
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(interger) {
  const fareMultiplier = fare => fare * interger;
  return fareMultiplier;
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, selectingDrivers) {
  return selectingDrivers(drivers);
}

