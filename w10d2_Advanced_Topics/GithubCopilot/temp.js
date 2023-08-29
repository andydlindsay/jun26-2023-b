// function to calculate the number of days between now and Christmas
//

function daysToChristmas() {
  var now = new Date();
  var christmas = new Date(now.getFullYear(), 11, 25);
  if (now.getMonth() == 11 && now.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }
  var one_day = 1000 * 60 * 60 * 24;
  var days = Math.ceil((christmas.getTime() - now.getTime()) / (one_day));
  return days;
}

console.log('daysToChristmas', daysToChristmas());
