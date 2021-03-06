  var FAB = $('.menu-open-button');

  FAB.click(function(){
      $(".FAB").toggleClass('open').toggleClass('closed');
      $('.container-flex').toggleClass('navOpen');
  });//close on click


/* ____ DOC READY ____*/
$(document).ready(function(){
  console.log('ready');

  $('.anchor-tag').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });

  /*Materialize Calls*/
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();
  $('.materialboxed').materialbox();

  $('#nameHeading').hover(function(){
    $('.hover.panel').addClass('flip');
    },function(){
    $('.hover.panel').removeClass('flip');
  });

function stickyHeader() {
             var scrollTop     = $(window).scrollTop(),
                 elementOffset = $('.iconContainer2').offset().top,
           elementOffsetHeight = elementOffset + $('.iconContainer2').innerHeight(),
                          body = $('body');
    if (scrollTop > elementOffsetHeight) {
      body.addClass('menuBody');
      $('#floating-action-button').addClass('moveOverride');
    } else {
      body.removeClass('menuBody');
      $('#floating-action-button').removeClass('moveOverride');
    }
}        

//only load certain script on homepage
 if ($('body').hasClass('homepage')){
  //tilt.js
$('.js-tilt').tilt({
    scale: 1.5,
    reset: true
})
  stickyHeader()
  $(window).scroll(function() {
    stickyHeader();
  });
 } else {
  $('#floating-action-button').addClass('moveOverride');
 }



});//end doc ready

