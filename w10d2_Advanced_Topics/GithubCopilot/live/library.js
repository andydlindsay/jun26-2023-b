// function to calculate the number of days until Christmas
function daysUntilChristmas() {
  var today = new Date();
  var christmas = new Date(today.getFullYear(), 11, 25);
  if (today.getMonth() == 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }
  return Math.ceil((christmas.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

console.log('days until Christmas: ', daysUntilChristmas());
