// daysUntilChristmas() returns the number of days until Christmas
//
// @param {Date} date - the date to calculate from
// @return {Number} the number of days until Christmas
function daysUntilChristmas(date) {
  var christmas = new Date(date.getFullYear(), 11, 25);
  if (date.getMonth() === 11 && date.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }
  return Math.ceil((christmas - date) / (1000 * 60 * 60 * 24));
}

module.exports = {
  daysUntilChristmas: daysUntilChristmas
};
