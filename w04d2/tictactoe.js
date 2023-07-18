// const victoryTypes = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,4,8],
//   [2,4,6],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8]
// ];

const playerDidWin = function(theTD){
  let rowWin = true;
  $(theTD).parent().find('td').each(function(){
    console.log('monkeyfuzz');
    if (!$(this).hasClass($('#player').html())) {
      rowWin = false;
    }
  });
  return rowWin;
};

$(document).ready(function(){
  console.log('i am inside the event handler');

  $('td').click(function(){
    console.log('td was clicked');
    const player = $('#player').html();
    console.log(`player: ${player}`);
    $(this).addClass(player); // <td class=""></td>

    $(this).off();

    if (playerDidWin(this)) {
      $('td').off();
      $('h3').html(`${player} has won the game! Click <a href="">here</a> to play again.`);
    }

    if (player === 'X') {
      $('#player').html('O');
    } else {
      $('#player').html('X');
    }

  });

});
