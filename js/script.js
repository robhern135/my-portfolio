$( document ).ready(function() {
    console.log( "ready!" );


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var bio = {
    "jobtitle" : "Junior Front End Web Developer"

}
$("#jobtitle").html(bio.jobtitle);


/*  RESPONSIVE PORTFOLIO BOXES */

var portfolio = {
  "projects": [{
        "mainimg": "img/jack2_small.jpg",
        "name": "3D Artist Site",
        "for": "Jack Mudge",
        "morelink": "jackmudge.html",
        "extlink": "http://robhern135.github.io/Jack-Mudge"
    }, {
        "mainimg": "img/resume1_small.png",
        "name": "TEST TEST TEST",
        "for": "Udacity Nanodegree",
        "morelink": "responsiveresume.html",
        "extlink": "http://robhern135.github.io/responsive-resume"
    }, {
        "mainimg": "http://placekitten.com/1000/500",
        "name": "TEST TEST TEST",
        "for": "TEST",
        "morelink": "http://google.com",
        "extlink": "http://google.co.uk"
    }]
}

var HTMLprojectStart = '<div class="project-box"></div>';
var HTMLprojectMainImg = '<img src="%data%" />';
//replace with:
//<img src="img/jack1_small.jpg"
//      onmouseover="this.src='img/jack2_small.jpg'"
//      onmouseout="this.src='img/jack1_small.jpg'" 
//      alt ="Jack Mudge - 3D Artist Portfolio Site"/>
var HTMLprojectName = '<h3>%data%</h3>';
var HTMLprojectFor = '<h4 class="handwritten">%data%</h4>';
var HTMLprojectMorelink = '<p><a href="%data%">Learn More</a>  |  ';
var HTMLprojectExtlink = '<a href="%data%">View</a></p>';


portfolio.display = function() {

  for (var p = 0; p < portfolio.projects.length; p++) {
    $("#project-container").append(HTMLprojectStart);
    var formattedprojectMainImg = HTMLprojectMainImg.replace("%data%", portfolio.projects[p].mainimg);
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

});