import React from 'react';

const ProjectOne = () => {

  const style = { marginTop: 150 };  

  return (
    <div className="">
      <h2 class="heading heading-sec heading-sec__mb-bg">
        <span class="heading-sec__main" style={style}>
          Place Sharing App
        </span>
        <span class="heading-sec__sub">
          This page contains the case study of Place Sharing App which includes
          the Project Overview, Tools Used and Live Links to the official
          product.
        </span>
        <br />
        <div class="d-grid gap-2  justify-content-xl-center">
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4 " >See Live</button> */}
        </div>
      </h2>

      <div class="main-container">
        <div class="">
          <div class="projects__row-img-cont">
            <img
              src="https://res.cloudinary.com/dsaaaqnqj/image/upload/t_laptop1/v1703043820/Untitled_design-6_vzkyfc.png"
              alt="Software Screenshot"
              className="projects__row-img"
            />
          </div>
          <div class="project-details__content-main">
            <div class="project-details__desc">
              <h2 class="project-details__content-title mt-5">
                Project Overview
              </h2>
              <p class="project-details__desc-para">
                Registered users can share their favourite places for other
                users to browse.
              </p>
              <p class="project-details__desc-para">
                The places used Google Map and Open Weather API supported data
                for user's reference.
              </p>
              <p class="project-details__desc-para">
                Feel free to check out the Project
              </p>
              <a href="https://github.com/S1Y333/FavPlace_backend">
                <p class="project-details__desc-para link">here</p>
              </a>
            </div>
            <div class="project-details__tools-used">
              <h2 class="project-details__content-title">Tools Used</h2>
              <div class="skills">
                <div class="skills__skill">HTML</div>
                <div class="skills__skill">CSS</div>
                <div class="skills__skill">ReactJS</div>
                <div class="skills__skill">NodeJS</div>
                <div class="skills__skill">Github</div>
                <div class="skills__skill">MongoDB</div>
                <div class="skills__skill">ExpressJS</div>
                <div class="skills__skill">Firebase</div>
                <div class="skills__skill">Bootstrap</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectOne;