const PartyEasy = () => {
  const style = { marginTop: 150 };

  return (
    <div className="">
      <h2 class="heading heading-sec heading-sec__mb-bg">
        <span class="heading-sec__main" style={style}>
          Party Easy App
        </span>
        <span class="heading-sec__sub">
          This page contains the case study of Party Easy App which includes the
          Project Overview, Tools Used and Github Links to the code.
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
                The app is designed to organize party easily but also include
                almost everything for holding a party. Registered user can
                submit a party request form with numbers of guests, location,
                budget, food, drink preference and get customized recommendation
                with venue booking link and food drink options
              </p>
              <p class="project-details__desc-para">
                The project used Google Map and Unsplash API, webscrapping real
                data from website, and also added real-time chat functions.
              </p>
              <p class="project-details__desc-para">
                Feel free to check out the Project
              </p>
              <a href="https://github.com/S1Y333/partyEasy-backend">
                <p class="project-details__desc-para">here</p>
              </a>
            </div>
            <div class="project-details__tools-used">
              <h2 class="project-details__content-title">Tools Used</h2>
              <div class="skills">
                <div class="skills__skill">ReactJS</div>
                <div class="skills__skill">SCSS</div>
                <div class="skills__skill">ReactJS</div>
                <div class="skills__skill">NodeJS</div>
                <div class="skills__skill">TypeScript</div>
                <div class="skills__skill">Socket.io</div>
                <div class="skills__skill">MySQL</div>
                <div class="skills__skill">TypeORM</div>
                <div class="skills__skill">Firebase</div>
                <div class="skills__skill">Puppeteer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyEasy;
