const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

  <style>
header {
  position: relative;
}

.horizontalNav {
  background-color: #08f735;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
}

.sideNav {
  position: absolute;
  background-color: #ff6f0f;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000000000;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: first baseline;
  left: -200vw;
  transition: 0.8s all ease-in-out;
}

.sideNav div {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  position: relative;
  margin-bottom: 30px;
}

.sideNav div .closeIcon {
  font-size: 50px !important;
  margin-right: 20px;
  cursor: pointer;
}

.sideNav h2 {
  font-size: 38px !important;
  margin: 50px 5px;
  color: #191919;
  font-size: 25px;
  font-family: "Rubik Wet Paint", "Rubik Moonrocks", sans-serif;
  letter-spacing: 3px;
}

.sideNav ul {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.sideNav li {
  list-style-type: none;
  font-family: "Oswald", sans-serif;
  font-size: 30px !important;
  line-height: 200% !important;
}

.sideNav a {
  color: #191919;
}

header .horizontalNav h3 {
  color: #fff;
  font-size: 25px;
  font-family: "Rubik Wet Paint", "Rubik Moonrocks", sans-serif;
  letter-spacing: 3px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  padding: 0;
}

.horizontalNav ul li {
  list-style: none;
  display: inline;
}

a {
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 25px;
  color: #fff;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

a:hover {
  padding-bottom: 5px;
  box-shadow: inset 0 -2px 0 0 #fff;
}

.menuBarDiv {
  display: none;
  cursor: pointer;
}

.menuBar {
  color: #fff;
  font-size: 35px !important;
}

@media only screen and (max-width: 768px) {
  .menuBarDiv {
    display: block;
  }

  nav {
    display: none;
  }
}

@media only screen and (max-width: 500px) {
  header h3 {
    font-size: 20px;
  }

  .sideNav h2 {
    font-size: 28px !important;
  }
}

  </style>
  <header>
       <section class="horizontalNav">
          <div>
            <h3>Nikki Gilbert</h3>
          </div>
          <nav>
          <ul>
              <li><a href="Index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="books.html">Books</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
         </nav>
        <div class="menuBarDiv" id="Menu-Toggle-Btn">
            <i  class="fa fa-bars menuBar" aria-hidden="true"></i>
        </div>
       </section>
        <div id="toggleMenu" class="sideNav">
          <div id="closeMenu">
            <i class="fa fa-times closeIcon" aria-hidden="true"></i>
          </div>
          <h2>Nikki Gilbert</h2>
          <ul>
            <li><a href="Index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="books.html">Books</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        </div>
      </header>

      <script src="../asset/scripts/toggleMenu.js"></script>

`;

class Header extends HTMLElement {
    constructor() {
      super();
    }

connectedCallback() {
  // Query the main Dom for jQuery
  const jQuery = document.querySelector('link[href*="code.jquery"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

      // Conditionally load jQuery to the component
      if (jQuery) {
        shadowRoot.appendChild(jQuery.cloneNode());
      }

    shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);