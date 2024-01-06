import React from 'react';

const ProjectTwo = () => {

  const style = { marginTop: 150 };  

  return <div className="">
          <h2 class="heading heading-sec heading-sec__mb-bg">
      <span class="heading-sec__main" style={style}>MERN STACK E-COMMERCE APP</span>
      <span class="heading-sec__sub">
      This page contains the case study of MERN STACK E-COMMERCE APP which includes the Project Overview, Tools Used and Live Links to the official product.
      </span><br />
      <div class="d-grid gap-2  justify-content-xl-center">
       
      {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4 " >See Live</button> */}
      </div>
    </h2>
   
    <div class="main-container">
      <div class="">
      <div class="projects__row-img-cont">
          <img src="https://res.cloudinary.com/dsaaaqnqj/image/upload/t_laptop2/v1703098663/Untitled_design-7_utqjso.png" alt="Software Screenshot" className="projects__row-img" />
        </div>
        <div class="project-details__content-main">
          <div class="project-details__desc">
            <h2 class="project-details__content-title mt-5">Project Overview</h2>
            <p class="project-details__desc-para">
            E-commerce website for users to purchase laptops.
            
            </p>
            <p class="project-details__desc-para">
            - 8 Advanced filtering searching products <br />
            - Create/apply Coupon to the purchase <br />
            - Order Invoice generation and download <br />
            - Designed role-based access control and order management <br />
            - Integrated Stripe API for payment processing and Cash on delivery order 

            </p>
            <p class="project-details__desc-para">
              Feel free to check out the Project by visiting the Live Link.
            </p>
          </div>
          <div class="project-details__tools-used">
            <h2 class="project-details__content-title">Tools Used</h2>
            <div class="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">ReactJS</div>
              <div class="skills__skill">NodeJS</div>
              <div class="skills__skill">ExpressJS</div>
              <div class="skills__skill">Github</div>
              <div class="skills__skill">Ant Design</div>
              <div class="skills__skill">Redux</div>
              <div class="skills__skill">MongoDB</div>
              <div class="skills__skill">Bootstrap</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  
  </div>
}

export default ProjectTwo;