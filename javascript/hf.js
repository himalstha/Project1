class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <div class="nanobar my-class" id="my-id" style="position: fixed;">
    <div class="bar"></div>
    </div>
    <a href="./../index.html" class="logo">    <img src="./../../../../img/dark-logo.png" alt="">
himalstha<span>.com.np</span></a>
    <nav class="navbar">
      <ul class="navbar-list">
        <li><ion-icon name="moon-outline" class="fas"></ion-icon></li>
        <li><a href="./../../../../../index.html" class="navbar-link">home</a></li>
        <li><a href="./../../../../../navlinks/notes.html" class="navbar-link"> Notes </a></li>
        <li><a href="./../../../../../navlinks/news.html" class="navbar-link"> News </a></li>
        <li><a href="./../../../../../navlinks/contact.html" class="navbar-link"> Contact </a></li>
       
     </ul>
    </nav>    
    `;
  }
}



customElements.define('header-links', MyComponent);


class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <footer class="footer-distributed">
    <div class="footer-left">
      <h3>himalstha<span>.com.np</span></h3>
      <p class="footer-links">
        <a href="./../../../../../index.html">Home</a>
        <a href="./../../../../../../navlinks/game.html">Games</a>
        <a href="./../../../../../../navlinks/notes.html">Notes</a>
        <a href="./../../../../../../navlinks/exercise.html">Exercise</a>
        <a href="./../../../../../../navlinks/contact.html">Contact</a>
      </p>
      <p class="footer-company-name">himalstha.com.np © 2022</p>
    </div>
    <div class="footer-center">
      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Nepal</span> Kalankistan-14, Kathmandu</p>
      </div>
      <div>
        <i class="fa fa-phone"></i>
        <p>+977 9881219312</p>
      </div>
      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:admin@himalstha.com.np">admin@himalstha.com.np</a></p>
      </div>
    </div>
    <div class="footer-right">
      <div class="footer-icons">
        <a href="" onclick="window.open('http://www.facebook.com/share.php?u=' + 
                encodeURIComponent(location.href))">
                <ion-icon name="logo-facebook"></ion-icon></a>
        <a href="http://www.youtube.com/"><ion-icon name="logo-youtube"></ion-icon></a>
        <a href="http://www.pinterest.com/"><ion-icon name="logo-pinterest"></ion-icon></a>
        <a href="http://www.call-outline.com/"><ion-icon name="call-outline"></ion-icon></i></a>
      </div>
    </div>
  </footer>

  

    `;
  }
}
    
customElements.define('footer-last', MyFooter);




class overLays extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `


 <div class="search-container" id="searchContainer">
    <form action="">
      <input id="searchbar" onkeyup="search_animal()" type="text" name="search" placeholder="Search">
      <button onclick="showSearchbar();" id="searchid"><ion-icon name="search-outline"></ion-icon></button>
    </form>

    <!-- input tag -->

    <!-- ordered list -->
    <ol id='list' class="ol-list">
      <li class="animals">
        <div class="list-tm"><img src="./../../../../../img/01.png" alt=""><a href="./navlinks/library.html">Cat</a></div>
      </li>
      <li class="animals">
        <div class="list-tm"><img src="./../../../../../img/bg.jpg" alt=""><a href="./navlinks/library.html">hemap</a></div>
      </li>
      <li class="animals">
        <div class="list-tm"><img src="./../../../../../img/admin.png" alt=""><a href="./navlinks/library.html">lorem </a></div>
      </li>
      <li class="animals">
        <div class="list-tm"><img src="./../../../../../img/physics.png" alt=""><a href="./navlinks/library.html">link</a></div>
      </li>
      <li class="animals">
        <div class="list-tm"><img src="./../../../../../img/logo.jpg" alt=""><a href="./navlinks/library.html">button</a></div>
      </li>
      <li class="animals">
        <div class="list-tm"><img src="./img/01.png" alt=""><a href="./navlinks/library.html">cursor</a></div>
      </li>
    </ol>
  </div>


    <div id="progress">
    <span id="progress-value"><ion-icon name="arrow-up-circle-outline"></ion-icon></span>
  </div>
<div style="height: 6rem;"></div>
    `;
  }
}
    
customElements.define('body-overlays', overLays);





    


// -- - - - - -- - -Dark theme ---- - -- - - -
const darkBtn = document.querySelector('.fas');
const bodyEl = document.querySelector('body');

const darkMode = () => {
    bodyEl.classList.toggle('dark')
}

darkBtn.addEventListener('click', () => {
    // Get the value of the "dark" item from the local storage on every click
    setDarkMode = localStorage.getItem('dark');

    if(setDarkMode !== "on") {
        darkMode();
        // Set the value of the itwm to "on" when dark mode is on
        setDarkMode = localStorage.setItem('dark', 'on');
    } else {
        darkMode();
        // Set the value of the item to  "null" when dark mode if off
        setDarkMode = localStorage.setItem('dark', null);
    }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark');

// Check dark mode is on or off on page reload
if(setDarkMode === 'on') {
    darkMode();
}


//-- - -  - - -     Go to top -     - - -- - - - -   

    let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById("progress-value");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(#12c4fa ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;



