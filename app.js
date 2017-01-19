$('document').ready(function(){

  var color = 'white';

  $('#red').on('click', function() {
    color = 'red';
  })

  $('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })

  $('#white').on('click', function() {
    color = 'white';
  })

  var color = 'white';
  var $box = $('.box');
  var allColors = 'red green white blue yellow';

  $box.on('mouseover', function(){
    $(this).addClass(color);
  });

  $box.on('dblclick', function(){
    $(this).removeClass(color);
  });

  $('#reset').on('click', function(){
    $box.removeClass(allColors);
  });


});
