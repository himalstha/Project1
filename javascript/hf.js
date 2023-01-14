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
    <div class="termsCondition"><a href="./../../../../termsCondition.html">Terms</a><a href="./../../../../privacyPolicy.html">Privacy and Policy</a><a href="./../../../../cookies.html
        ">Cookies</a><a href="advertising.html">Adversing</a><a>himalstha.com.np © 2023</a></div>
  </footer>

  

    `;
  }
}
    
customElements.define('footer-last', MyFooter);











class overLays extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `


 <div class="search-container" id="searchContainer">
    <form>
      <input id="searchbar" onkeyup="search_animal()" type="text" name="search" placeholder="Search">
    <div class="searchcross">
      <button onclick="showsearchlist()" class="crossicon"><ion-icon name="close-outline"></ion-icon></button>
      </div>
      <div class="search">
      <button onclick="showsearchlist()"><ion-icon name="search-outline"></ion-icon></button>
      </div>  
      </form>

    <!-- input tag -->

    <!-- ordered list -->
    <ol id='list' class="ol-list">


    
      <li class="animals">
              <div style="display:none;">neb himal show notes grade 11 grade 12 all notes and excercises</div>
              <div class="list-tm"><img src="./../../../../../img/i1.jpg" alt=""><a href="./../../../../../navlinks/notes.html">See all the notes <ion-icon name="search-outline"></ion-icon></a></div>
      </li>


      <li class="animals">
              <div style="display:none;">neb himal</div>
              <div class="list-tm"><img src="./../../../../../img/12math.png" alt=""><a href="./../../../../../navlinks/notes/math/12-math-syllabus.html">Grade 12 Math Notes and Syllabus <ion-icon name="search-outline"></ion-icon></a></div>
      </li>
       <li class="animals">
        <div style="display:none;">neb math </div>
        <div class="list-tm"><img src="./../../../../../img/12physics.png" alt=""><a href="./../../../../../navlinks/notes/physics/12-physics-syllabus.html">Grade 12 Physics Notes and Syllabus<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

      <li class="animals">
        <div style="display:none;">neb physics ac generator acgenerator grade 12 grade12 ac generator notes </div>
        <div class="list-tm"><img src="./../../../../../img/12physics.png" alt=""><a href="./../../../../../navlinks/notes/physics/12-physics-ac-generators.html">Ac Generator grade 12 Physics Notes<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

      
      <li class="animals">
        <div style="display:none;">neb physics bohr's postulates grade 12 grade12 bohrs atomic model bohrs postulates grade 12 notes </div>
        <div class="list-tm"><img src="./../../../../../img/12physics.png" alt=""><a href="./../../../../../navlinks/notes/physics/12-physics-bohrs-postulate.html">Bohr's Postulates grade 12 Physics Notes<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

      
      <li class="animals">
        <div style="display:none;">neb physics electrical circuit grade 12 grade 12 electric circuit notes </div>
        <div class="list-tm"><img src="./../../../../../img/12physics.png" alt=""><a href="./../../../../../navlinks/notes/physics/12-physics-electrical-circuit.html">Electrical circuit grade 12 Physics Notes<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

      <li class="animals">
        <div style="display:none;">neb physics rectification grade 12 grade12 rectification modern physics notes </div>
        <div class="list-tm"><img src="./../../../../../img/12physics.png" alt=""><a href="./../../../../../navlinks/notes/physics/12-physics-rectification.html">Rectification grade 12 Physics Notes<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

      
      <li class="animals">
        <div style="display:none;">neb physics rotational dynamic grade 12 grade12 rotational dynamics notes </div>
        <div class="list-tm"><img src="./../../../../../img/12physics.png" alt=""><a href="./../../../../../navlinks/notes/physics/12-physics-rotational-dynamics.html">Rotational dynamics grade 12 Physics Notes<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

   <li class="animals">
        <div style="display:none;">neb physics self inductance  grade 12 self inductance notes </div>
        <div class="list-tm"><img src="./../../../../../img/12physics.png" alt=""><a href="./../../../../../navlinks/notes/physics/12-self-inductance-dynamics.html">Self Inductance  grade 12 Physics Notes<ion-icon name="search-outline"></ion-icon></a></div>
      </li>
      
         <li class="animals">
        <div style="display:none;">neb physics transformer grade 12 grade transformer notes </div>
        <div class="list-tm"><img src="./../../../../../img/12physics.png" alt=""><a href="./../../../../../navlinks/notes/physics/12-physics-transformer.html">Transformer grade 12 Physics Notes<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

         <li class="animals">
        <div style="display:none;">neb physics grade 12 gorkha earthquake download gorkha earthquake grade 12 </div>
        <div class="list-tm"><img src="./../../../../../img/12physics.png" alt=""><a href="./../../../../../navlinks/notes/physics/GORKHA EARTHQUAKE.pdf">Download Gorkha earthquake pdf Physics Notes<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

      <li class="animals">
        <div style="display:none;">neb physics grade 12 Unit and dimension grade 11 grade 12 </div>
        <div class="list-tm"><img src="./../../../../../img/12physics.png" alt=""><a href="./../../../../../navlinks/notes/physics/unit-and-dimension.html">Unit and dimension Physics Notes<ion-icon name="search-outline"></ion-icon></a></div>
      </li>
      

       <li class="animals">
         <div style="display:none;">neb math </div>
         <div class="list-tm"><img src="./../../../../../img/12chemistry.png" alt=""><a href="./../../../../../navlinks/notes/chemistry/12-chemistry-syllabus.html">Grade 12 Chemistry Notes and Syllabus<ion-icon name="search-outline"></ion-icon></a></div>
      </li>
      
       <li class="animals">
         <div style="display:none;">neb math important formula integration formula derivatives formula</div>
         <div class="list-tm"><img src="./../../../../../img/12math.png" alt=""><a href="./../../../../../navlinks/notes/math/math-important-formulas.html">+2 Math Important formulas<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

      
       <li class="animals">
         <div style="display:none;">neb math permutation and combination permutation grade12 grade 12 permutation</div>
         <div class="list-tm"><img src="./../../../../../img/12math.png" alt=""><a href="./../../../../../navlinks/notes/math/permutation-and-combination.html">Permutation and Combination Math Grade 12<ion-icon name="search-outline"></ion-icon></a></div>
      </li>


       <li class="animals">
         <div style="display:none;">neb chemistry </div>
         <div class="list-tm"><img src="./../../../../../img/12chemistry.png" alt=""><a href="./../../../../../navlinks/notes/chemistry/12-chemistry-syllabus.html">Grade 12 Chemistry Syllabus<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

       <li class="animals">
         <div style="display:none;">neb chemistry equilibrium neb grade12 ionic equilibrium</div>
         <div class="list-tm"><img src="./../../../../../img/12chemistry.png" alt=""><a href="./../../../../../navlinks/notes/chemistry/12-ionic-equilibrium.html">Ionic Equilibrium grade 12<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

       <li class="animals">
         <div style="display:none;">neb chemistry volumetric analysis neb grade12 ionic equilibrium</div>
         <div class="list-tm"><img src="./../../../../../img/12chemistry.png" alt=""><a href="./../../../../../navlinks/notes/chemistry/12-volumetric-analysis.html">Volumetric analysis  grade 12<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

       <li class="animals">
        <div style="display:none;">neb </div>
        <div class="list-tm"><img src="./../../../../../img/12english.png" alt=""><a href="./../../../../../navlinks/notes/english/12-english.html">Grade 12 English notes and Syllabus<ion-icon name="search-outline"></ion-icon></a></div>
      <div style="display:none;">english neb </div>
        </li>
       <li class="animals">
        <div style="display:none;">neb </div>
        <div class="list-tm"><img src="./../../../../../img/12nepali.png" alt=""><a href="./../../../../../navlinks/notes/nepali/12-nepali.html">Grade 12 Nepali Notes and Syllabus<ion-icon name="search-outline"></ion-icon></a></div>
      </li>
       <li class="animals">
        <div style="display:none;">himal </div>
        <div class="list-tm"><img src="./../../../../../img/12nepali.png" alt=""><a href="./../../../../../navlinks/notes/nepali/12-nepali.html">12 Nepali Syllabus<ion-icon name="search-outline"></ion-icon></a></div>
      </li>

      <li class="animals">
        <div style="display:none;">himal grade 12 computer </div>
        <div class="list-tm"><img src="./../../../../../img/logo.jpg" alt=""><a href="./../../../../../navlinks/notes/computer/12-computer-syllabus.html">Grade 12 Computer Syllabus<ion-icon name="search-outline"></ion-icon></a></div>
      </li>
       <li class="animals">
        <div style="display:none;">himal grade 12 computer c programming cprogramming grade12 cprogramming</div>
        <div class="list-tm"><img src="./../../../../../img/logo.jpg" alt=""><a href="./../../../../../navlinks/notes/computer/c-programming.html">C-programming Grade 12 Computer<ion-icon name="search-outline"></ion-icon></a></div>
      </li>
    </ol>
  </div>


    <div id="progress">
    <span id="progress-value"><ion-icon name="chevron-up-outline"></ion-icon></span>
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



