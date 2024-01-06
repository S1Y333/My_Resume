import React from 'react';

const About = () => {
   
    const style = { marginTop: 100 };

    return  <div className="main-container">
    <h2 class="heading heading-sec heading-sec__mb-med">
      <span class="heading-sec__main" style={style}>About Me</span>
      <span class="heading-sec__sub">
        Here you will find more information about me, what I do, and my
        current skills.
      </span>
    </h2>
    <div class="about__content">
      <div class="about__content-main">
        <h3 class="about__content-title">Get to know me!</h3>
        <div class="about__content-details">
          <p class="about__content-details-para">
            I'm a <strong>Full-Stack Web Developer</strong> building both
            Front-end & Back-end of Web Applications. Check out some of my work in the <strong>Projects</strong> section.
          </p>
          {/* <p class="about__content-details-para">
            I also like sharing content related to the stuff that I have
            learned over the years in <strong>Web Development</strong> so it
            can help other people of the Dev Community. Feel free to Connect
            or Follow me on my
            <a rel="noreferrer" href="https://linkedin.com/in/rammcodes" target="_blank">Linkedin</a>
            where I post useful content related to Web Development and
            Programming
          </p> */}
          <p class="about__content-details-para">
            I'm open to <strong>Job</strong> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to <strong>contact</strong> me.
          </p>
        </div>
        <a href="./contact" class="btn btn--med btn--theme dynamicBgClr">Contact</a>
      </div>
      <div class="about__content-skills">
        <h3 class="about__content-title">My Skills</h3>
        <div class="skills">
          <div class="skills__skill">HTML</div>
          <div class="skills__skill">CSS</div>
          <div class="skills__skill">JavaScript</div>
          <div class="skills__skill">ReactJS</div>
          <div class="skills__skill">Java</div>
          <div class="skills__skill">GIT</div>
          <div class="skills__skill">Github</div>
          <div class="skills__skill">NodeJS</div>
          <div class="skills__skill">ExpressJS</div>
          <div class="skills__skill">MongoDB</div>
          <div class="skills__skill">Spring Boot</div>
          <div class="skills__skill">MySQL</div>
          <div class="skills__skill">Redux</div>
          <div class="skills__skill">Bootstrap</div>
        </div>
      </div>
    </div>
    <div class="px-4 py-5 my-5 text-center">
    
    <h2 class="display-5 fw-bold"></h2>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4"></p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        
      </div>
    </div>  
  </div>
  </div>

}

export default About;