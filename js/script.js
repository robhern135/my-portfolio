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

var portfolio = {
  "projects" : [{
    "mainimg" : "jacksite_small.jpg",
    "name" : "3D Artist Site",
    "for" : "Jack Mudge",
    "description" : "Responsive portfolio site for an artist",
    "morelink" : "/jackmudge.html",
    "extlink" : "http://robhern135.github.io/Jack-Mudge"
    },{
    "mainimg" : "responsiveresume_small.jpg",
    "name" : "Responsive Resume",
    "for" : "Udacity Nanodegree",
    "description" : "Resume populated on pageload with data from JSON objects",
    "morelink" : "/responsiveresume.html",
    "extlink" : "http://robhern135.github.io/responsive-resume"
    },
  ]
};

var HTMLprojectStart = '<div class="project-box"></div>';
var HTMLprojectMainImg = '<img src="%data%"/>';
var HTMLprojectName = '<h3>%data%</h3>';
var HTMLprojectFor = '<h4 class="handwritten">date-text">%data%</h4>';
var HTMLprojectMorelink = '<p><a href="&data&">Learn More</a>  |  ';
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


