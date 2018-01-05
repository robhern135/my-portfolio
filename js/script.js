$( document ).ready(function() {
    console.log( "ready!" );

//smooth scrolling
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


$(function() { //triggers above when #info-container is on screen
       $('#bar-trigger').waypoint(function() {
         ProgressBarInitiate();
         }, {
           offset: '20%'
         });
    });


//THANKS TO CODEPEN USER @stevenbhn & @thathurtabit for below
//PROGRESS BAR JS
function ProgressBarInitiate() {
$('.progress-wrap').each(function(){
    percent = $(this);
    bar = $(this).children('.progress-bar');
    moveProgressBar(percent, bar);
});

  // on browser resize...
  $(window).resize(function() {
    $('.progress-wrap').each(function(){
        percent = $(this);
        bar = $(this).children('.progress-bar');
        moveProgressBar(percent, bar);
    });
  });

  // SIGNATURE PROGRESS
  function moveProgressBar(percent, bar) {
      var getPercent = (percent.data('progress-percent') / 100);
      var getProgressWrapWidth = percent.width();
      var progressTotal = getPercent * getProgressWrapWidth;
      var animationLength = 1000;

      // on page load, animate percentage bar to data percentage length
      // .stop() used to prevent animation queueing
      bar.stop().animate({
          left: progressTotal
      }, animationLength);
  }
};
////////
$(function() { //triggers above when #info-container is on screen
       $('.skills-box:first-of-type').waypoint(function() {
         SkillsBarsInitiate();
         }, {
           offset: '100%'
         });
    });


//THANKS TO CODEPEN USER @stevenbhn & @thathurtabit for below
//PROGRESS BAR JS
function SkillsBarsInitiate() {
$('.skills-progress-wrap').each(function(){
    percent = $(this);
    bar = $(this).children('.skills-progress-bar');
    moveProgressBar(percent, bar);
});

  // on browser resize...
  $(window).resize(function() {
    $('.skills-progress-wrap').each(function(){
        percent = $(this);
        bar = $(this).children('.skills-progress-bar');
        moveProgressBar(percent, bar);
    });
  });

  // SIGNATURE PROGRESS
  function moveProgressBar(percent, bar) {
      var getPercent = (percent.data('skills-progress-percent') / 100);
      var getProgressWrapWidth = percent.width();
      var progressTotal = getPercent * getProgressWrapWidth;
      var animationLength = 1000;

      // on page load, animate percentage bar to data percentage length
      // .stop() used to prevent animation queueing
      bar.stop().animate({
          left: progressTotal
      }, animationLength);
  }
};

//responsive Job title info

var bio = {
    "jobtitle" : "Junior Front End Web Developer"
};

$("#jobtitle").html(bio.jobtitle);


var header = $('#m10_header');
var range = 200;

$(window).on('scroll', function () {
  
  var scrollTop = $(this).scrollTop(),
      height = $(window).outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;

  header.css({ 'opacity': calc });

  if (calc > '1') {
    header.css({ 'opacity': 1 });
  } else if ( calc < '0' ) {
    header.css({ 'opacity': 0 });
  }
  
});



//remove headings on screens less than 1300px //
// //initialise stacking table
//   if ( $(window).width() < 1300) {      
//     $('.slide-header').css('display','none');

//   } 
//   else {
//     console.log("screen is too large for stackable table");
//   }

// PUT EVERYTHING ABOVE HERE
});