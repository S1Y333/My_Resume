import React from 'react';
import '../index.css'

const Footer = () => {
  return (
    <div>
      <footer class="fixed-bottom">
        <div class="main-container ">
          <div class="main-footer__upper">
            <div class="main-footer__row main-footer__row-1">
              <h2 class="heading heading-sm main-footer__heading-sm">
                <span>Social</span>
              </h2>
              <div class="main-footer__social-cont">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sylviazhangca"
                >
                  <img
                    class="main-footer__icon"
                    src="https://res.cloudinary.com/dsaaaqnqj/image/upload/v1703013001/in_ico_mavspl.png"
                    alt="Sylvia Linkedin Profile"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/s1y333"
                >
                  <img
                    class="main-footer__icon"
                    src="https://res.cloudinary.com/dsaaaqnqj/image/upload/v1703013817/25231_rvwaff.png"
                    alt="Sylvia Github Profile"
                  />
                </a>
              </div>
            </div>
            <div class="main-footer__row main-footer__row-2">
              <h2 class="heading heading-sm text-lt">Sylvia</h2>
              <p class="main-footer__short-desc text-dark">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div class="main-footer__lower text-dark">
            © Copyright
            <script>document.write(new Date().getFullYear())</script>2023. Made
            by Sylvia Zhang ❤️
          </div>
        </div>
      </footer>
    </div>
  );

}

export default Footer;