$(function(){
  $(window).resize(function(){
    if($(this).width() > 767){
      $.backstretch("assets/images/background.jpg", {speed: 150});
      $('#backstretch').show();
    } else {
      $('#backstretch').hide();
    }
  })
  .resize();//trigger resize on page load
});
