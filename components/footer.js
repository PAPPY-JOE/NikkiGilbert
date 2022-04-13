const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

  <style>
/* Footer */
footer {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 35px 0 0 0;
  margin: 0;
  // background: #cbcbcb;
  // background: #df5900;
  background: #ff6f0f;
}

footer p {
  font-family: "Open Sans", sans-serif;
  text-align: center;
}

footer p:nth-child(1) {
  font-size: 30px;
  color: #191919;
  line-height: 40px;
  overflow: visible;
  font-family: "Rubik Wet Paint", "Rubik Moonrocks", sans-serif;

}

footer p:nth-child(2) {
  font-size: 16px;
  color: #191919;
  max-width: 800px;
  min-width: 200px;
  margin: 0 50px 8px 50px;
}

.social-icons a {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  margin: 20px 10px;
  border-radius: 50%;
  transition: 0.5s all ease;
}

.social-icons {
  display: flex;
}

.social-icons i {
  color: white;
  transition: 0.5s all ease;
  font-size: 18px;
}

.social-icons a:hover,
.a-social-b a:hover {
  background-color: white;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
}

.social-icons a:hover i,
.a-social-b a:hover i {
  color: black;
}

.copyright {
  color: #191919;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 15px;
  width: 100vw;
}

  </style>

  <footer>
  <p>Nikki Gilbert</p>
  <p>You can also get in touch with me using any of the following mediums.</p>
  <!-- Social -->
  <div class="social-icons">
      <a href="https://www.facebook.com/joseph.fatoye.1/"><i class="fa fa-facebook"></i></a>
      <a href="https://www.instagram.com/olayemi_jf/"><i class="fa fa-instagram"></i></a>
      <a href="https://github.com/PAPPY-JOE"><i class="fa fa-github-square"></i></a>
      <a href="https://ng.linkedin.com/in/joseph-fatoye-b672781b1"><i class="fa fa-linkedin"></i></a>
  </div>

  <!-- Copyright -->
  <p class="copyright">Copyright &copy; 2022 - Nikki Gilbert</p>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);