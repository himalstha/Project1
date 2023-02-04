
 (function (I, L, T, i, c, k, s) { if (I.iticks) return; I.iticks = { host: c, settings: s, clientId: k, cdn: L, queue: [] }; var h = T.head || T.documentElement; var e = T.createElement(i); var l = I.location; e.async = true; e.src = (L || c) + '/client/inject-v2.min.js'; h.insertBefore(e, h.firstChild); I.iticks.call = function (a, b) { I.iticks.queue.push([a, b]); }; })(window, 'https://cdn-v1.intelliticks.com/prod/common', document, 'script', 'https://app.intelliticks.com', 'XoQXxTKFFo36h2CcA_c', {});
  

 
var options = {
      classname: 'my-class',
      id: 'my-id'
    };
    var nanobar = new Nanobar(options);
    nanobar.go(30);
    nanobar.go(76);
    nanobar.go(100);




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


window.addEventListener("load", function () {
  setTimeout(
    function open(event) {
    },
    1000
  )
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



  

    function showsearchlist() {
      document.getElementById('list').style.display = "none";
    }
    // JavaScript code
    function search_animal() {
      let input = document.getElementById('searchbar').value
      input = input.toLowerCase();
      let x = document.getElementsByClassName('animals');

      for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display = "none";
        } else if (input == "") {
          x[i].style.display = "none";
        }
        else {
          x[i].style.display = "list-item";
        }
      }
    }






        // Get the form element
        let form = document.querySelector("#class-subject-form")

        // Add a submit event listener to the form
        form.addEventListener("submit", function (event) {
            // Prevent the form from submitting
            event.preventDefault()

            // Get the selected class and subject values
            let classValue = form.elements.class.value
            let subjectValue = form.elements.subject.value

            // Construct the URL of the appropriate page
            let url = `./../../../../navlinks/notes/${subjectValue}/${classValue}-${subjectValue}-syllabus.html`

            // Redirect the visitor to the appropriate page
            window.location.href = url
        })

