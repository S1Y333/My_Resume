import React from 'react';

const ProjectThree = () => {

  const style = { marginTop: 150 };  

  return (
    <div className="">
      <h2 class="heading heading-sec heading-sec__mb-bg">
        <span class="heading-sec__main" style={style}>
          ANGULAR & JAVA ECOMMERCE APP
        </span>
        <span class="heading-sec__sub">
          This page contains the case study of ANGULAR & JAVA ECOMMERCE APP
          which includes the Project Overview, Tools Used for the official
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
              src="https://res.cloudinary.com/dtq1qzwxn/image/upload/c_crop,g_auto,h_700,w_1100/qkgm8gjb3phjsqmykw6l.jpg"
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
                E-commerce website for customer to purchase products.
              </p>
              <p class="project-details__desc-para">
                - Search by keywords <br />
                - User authentication <br />
                - Orders history <br />
                - Stripe payment API <br />
              </p>
              <p class="project-details__desc-para">
                Feel free to check out the Project
              </p>
              <a href="https://github.com/S1Y333/Full-Stack-E-Commerce-Website">
                <p class="project-details__desc-para link">here</p>
              </a>
            </div>
            <div class="project-details__tools-used">
              <h2 class="project-details__content-title">Tools Used</h2>
              <div class="skills">
                <div class="skills__skill">HTML</div>
                <div class="skills__skill">CSS</div>
                <div class="skills__skill">JAVA</div>
                <div class="skills__skill">Spring</div>
                <div class="skills__skill">Github</div>
                <div class="skills__skill">Spring Boot</div>
                <div class="skills__skill">MySQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectThree;