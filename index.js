const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("hi");
  nav_header.classList.toggle("active");
};

//  subscribe to thapa technical Channle plz link:https://www.youtube.com/thapatechnical
mobile_nav.addEventListener("click", () => toggleNavbar());

var loder = document.getElementById("preloder");
window.addEventListener("load", function () {
  loder.style.display = "none";
})
// instant nav bar
function openSubject(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


window.addEventListener("load", function () {
  setTimeout(
    function open(event) {
      document.querySelector(".popup-bg").style.display = "block";
    },
    1000
  )
});
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup-bg").style.display = "none";
});



function showleftSidebar() {
  var elementl = document.getElementById("left-sidebar");
  elementl.style.display = "block";
  var elementl = document.getElementById("lbar");
  elementl.classList.add("mystyle");
  var elementl = document.getElementById("mbar");
  elementl.classList.remove("mystyle");
  var elementl = document.getElementById("rbar");
  elementl.classList.remove("mystyle");
  var elementm = document.getElementById("main-content");
  elementm.style.display = "none";
  var elementr = document.getElementById("right-sidebar");
  elementr.style.display = "none";

}

function showMainContent() {
  var elementl = document.getElementById("left-sidebar");
  elementl.style.display = "none";
  var elementl = document.getElementById("mbar");
  elementl.classList.add("mystyle");
  var elementl = document.getElementById("lbar");
  elementl.classList.remove("mystyle");
  var elementl = document.getElementById("rbar");
  elementl.classList.remove("mystyle");
  var elementm = document.getElementById("main-content");
  elementm.style.display = "block";
  var elementr = document.getElementById("right-sidebar");
  elementr.style.display = "none";

}

function showRightSidebar() {
  var elementl = document.getElementById("left-sidebar");
  elementl.style.display = "none";
  var elementl = document.getElementById("rbar");
  elementl.classList.add("mystyle");
  var elementl = document.getElementById("lbar");
  elementl.classList.remove("mystyle");
  var elementl = document.getElementById("mbar");
  elementl.classList.remove("mystyle");
  var elementm = document.getElementById("main-content");
  elementm.style.display = "none";
  var elementr = document.getElementById("right-sidebar");
  elementr.style.display = "block";

}