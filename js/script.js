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

/*
//rollovers for icons

// ROLLOVER DESCRIPTOR FOR SOFTWARE IMAGES
  $(".feature").mouseover((eventobj) => {
    //grabs .iconimg and sets the following eventobj
    //to occur on mouseover

    $("#created-using").html(eventobj.target.alt)
      //grabs p tag and changes innerhtml to the
      //eventobj, what the element itself is, and the
      //alt tag of that element 
  })

  $(".feature").mouseleave(()=>{

    $("#created-using").html("")
    //mouseing off of the same, setting
    //to empty string
  })

*/


//responsive Job title info

var bio = {
    "jobtitle" : "Junior Front End Web Developer"
};

$("#jobtitle").html(bio.jobtitle);


/*  RESPONSIVE PORTFOLIO BOXES 

var portfolio = {
  "projects": [{
        "mainimg": "img/jacksite.png",
       // "rollimg" : "img/jack2_small.jpg",
        "name": "3D Artist Site",
        "for": "Jack Mudge",
        "morelink": "jackmudge.html",
        "extlink": "http://robhern135.github.io/Jack-Mudge",
        "alttxt" : "Jack Mudge 3D Artist"
    }, {
        "mainimg": "img/resume1_small.png",
      //  "rollimg" : "img/resume2_small.png",
        "name": "Responsive Resume",
        "for": "Udacity Nanodegree",
        "morelink": "responsiveresume.html",
        "extlink": "http://robhern135.github.io/responsive-resume"
    }, {
        "mainimg": "http://placekitten.com/999/500",
        //"rollimg" : "http://placekitten.com/999/500",
        "name": "Prototype",
        "for": "Video Production Company",
        "morelink": "videoprototype.html",
        "extlink": "http://robhern135.github.io/productionprototype"
    }]
};

var HTMLprojectStart = '<div class="project-box"></div>';
var HTMLimgbox = '<div class="imgbox"></div>'
var HTMLprojectMainImg = '<img class="portfolioimg" src="%data%" alt ="%alttxt%"/>';
/*var HTMLprojectMainImg = '<img class="portfolioimg" src="%data%" onmouseover="this.src=\'%dataroll%\'" onmouseout="this.src=\'%datamain%\'" alt ="%alttxt%"/>';
var HTMLaboutbox = '<div class="aboutbox"></div>'
var HTMLprojectName = '<h3>%data%</h3>';
var HTMLprojectFor = '<h4 class="handwritten">%data%</h4>';
var HTMLprojectMorelink = '<p><a href="%data%">See More</a>  |  ';
var HTMLprojectExtlink = '<a href="%data%">View</a></p>';
var HTMLdividingline = '<hr>';


/*portfolio.display = function() {

  for (var p = 0; p < portfolio.projects.length; p++) {
    $("#project-container").append(HTMLprojectStart);
    $(".project-box").append(HTMLimgbox);
    $(".project-box").append(HTMLaboutbox);
    var formattedprojectMainImg = HTMLprojectMainImg.replace("%data%", portfolio.projects[p].mainimg).replace("%dataroll%",portfolio.projects[p].rollimg).replace("%alttxt%", portfolio.projects[p].alttxt).replace('%datamain%', portfolio.projects[p].mainimg);
    $(".imgbox:last").append(formattedprojectMainImg);
    var formattedprojectName = HTMLprojectName.replace("%data%", portfolio.projects[p].name);
    $(".aboutbox:last").append(formattedprojectName);
    var formattedProjectFor = HTMLprojectFor.replace("%data%", portfolio.projects[p].for);
    $(".aboutbox:last").append(formattedProjectFor);
    var formattedProjectMoreLink = HTMLprojectMorelink.replace("%data%", portfolio.projects[p].morelink);
    var formattedProjectExtLink = HTMLprojectExtlink.replace("%data%", portfolio.projects[p].extlink);
    var formattedProject2Links = formattedProjectMoreLink + formattedProjectExtLink;
    $(".aboutbox:last").append(formattedProject2Links);
    $(".project-box:last").append(HTMLdividingline);
  } //end of loop
}; //end of function

portfolio.display() ;*/



// PUT EVERYTHING ABOVE HERE
});