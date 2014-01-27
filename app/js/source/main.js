(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#playButton').click(play);
    $('.reset').click(play);
  }

  var colors = ['#FFFF00', '#0000FF', '#009900', '#FF6600', '#9900CC', '#00FFFF', '#FFCC00', '#000000', '#ffc0cb',  '#FFFF00', '#0000FF', '#009900', '#FF6600', '#9900CC', '#00FFFF', '#FFCC00', '#000000', '#ffc0cb'];
  var ids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  function play(){
    alert('new game');
    createTable();
  }

  function assign(){
    for(var i=0; i<colors.length; i++){
      var color = colors.shift();
      var cNumber = Math.floor(Math.random()*ids.length);

      $('#td' +cNumber).css('background-color', color);

    }
  }

  function createTable(){
    $('#container').empty();
    var table = $('<table>');
    var count = 0;

    for(var iTR=0; iTR<5; iTR++){
      var tr = $('<tr>');

      for(var iTD=0; iTD<4; iTD++){
        var square = $('<td>');
        $(square).attr('td', count);
        $(square).text(count);
        count++;
        $(tr).append(square);
      }
      $(table).append(tr);
      assign();
    }
    $('#container').append(table);
    $('#playButton').text('Reset');
    $('#playButton').css('background-color', 'red');
    debugger;
    $('#playButton').addClass('reset');
  }

})();
