$(document).ready(function() {

  if(window.location !== "index.html"){
        $('.popup__container--about').addClass('showme');
  }



// ABOUT POPUP

$('.nav-link--about').click(function() {
    $('.header-content__container').addClass('hideme');
    $('.main-content__container').addClass('hideme');
    $('.popup__container--about').addClass('showme');
    $('body').addClass('bg-color-change');

});

$('.nav-link--close').click(function() {
    $('.popup__container--about').removeClass('showme');
    $('.header-content__container').removeClass('hideme');
    $('.main-content__container').removeClass('hideme');
    $('body').removeClass('bg-color-change');
});











  });
