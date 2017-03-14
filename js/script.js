$( document ).ready(function() {
    console.log( "ready!" );

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


//responsive Job title info

var bio = {
    "jobtitle" : "Junior Front End Web Developer"
};

$("#jobtitle").html(bio.jobtitle);


/*  RESPONSIVE PORTFOLIO BOXES */

var portfolio = {
  "projects": [{
        "mainimg": "img/jack1_small.jpg",
        "rollimg" : "img/jack2_small.jpg",
        "name": "3D Artist Site",
        "for": "Jack Mudge",
        "morelink": "jackmudge.html",
        "extlink": "http://robhern135.github.io/Jack-Mudge",
        "alttxt" : "Jack Mudge 3D Artist"
    }, {
        "mainimg": "img/resume1_small.png",
        "rollimg" : "img/resume2_small.png",
        "name": "Responsive Resume",
        "for": "Udacity Nanodegree",
        "morelink": "responsiveresume.html",
        "extlink": "http://robhern135.github.io/responsive-resume"
    }, {
        "mainimg": "http://placekitten.com/1000/500",
        "rollimg" : "http://placekitten.com/999/500",
        "name": "TEST TEST TEST",
        "for": "TEST",
        "morelink": "http://google.com",
        "extlink": "http://google.co.uk"
    }]
};

var HTMLprojectStart = '<div class="project-box"></div>';
var HTMLprojectMainImg = '<img src="%data%" onmouseover="this.src=\'%dataroll%\'" onmouseout="this.src=\'%datamain%\'" alt ="%alttxt%"/>';
var HTMLprojectName = '<h3>%data%</h3>';
var HTMLprojectFor = '<h4 class="handwritten">%data%</h4>';
var HTMLprojectMorelink = '<p><a href="%data%">See More</a>  |  ';
var HTMLprojectExtlink = '<a href="%data%">View</a></p>';


portfolio.display = function() {

  for (var p = 0; p < portfolio.projects.length; p++) {
    $("#project-container").append(HTMLprojectStart);
    var formattedprojectMainImg = HTMLprojectMainImg.replace("%data%", portfolio.projects[p].mainimg).replace("%dataroll%",portfolio.projects[p].rollimg).replace("%alttxt%", portfolio.projects[p].alttxt).replace('%datamain%', portfolio.projects[p].mainimg);
    $(".project-box:last").append(formattedprojectMainImg);
    var formattedprojectName = HTMLprojectName.replace("%data%", portfolio.projects[p].name);
    $(".project-box:last").append(formattedprojectName);
    var formattedProjectFor = HTMLprojectFor.replace("%data%", portfolio.projects[p].for);
    $(".project-box:last").append(formattedProjectFor);
    var formattedProjectMoreLink = HTMLprojectMorelink.replace("%data%", portfolio.projects[p].morelink);
    var formattedProjectExtLink = HTMLprojectExtlink.replace("%data%", portfolio.projects[p].extlink);
    var formattedProject2Links = formattedProjectMoreLink + formattedProjectExtLink;
    $(".project-box:last").append(formattedProject2Links);
  } //end of loop
}; //end of function

portfolio.display() ;



// PUT EVERYTHING ABOVE HERE
});