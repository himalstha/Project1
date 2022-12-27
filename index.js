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


window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


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
