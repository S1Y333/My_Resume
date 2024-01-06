import React from "react";


const Projects = () => {
    const style = { marginTop: 100 };

    return  <div class="main-container">
    <h2 class="heading heading-sec heading-sec__mb-bg">
      <span class="heading-sec__main" style={style}>Projects</span>
      <span class="heading-sec__sub">
        Here you will find some of the projects that I
        created with each project containing its own case study
      </span>
    </h2>

    <div class="projects__content">
      <div class="projects__row">
        <div class="projects__row-img-cont">
          <img src="https://res.cloudinary.com/dsaaaqnqj/image/upload/t_laptop1/v1703043820/Untitled_design-6_vzkyfc.png" alt="Software Screenshot" className="projects__row-img" />
        </div>
        <div class="projects__row-content">
          <h3 class="projects__row-content-title">PLACE SHARING APP</h3>
          <p class="projects__row-content-desc">
            This app is designed for users to share places with others.
          </p>
          <a class="btn btn--med btn--theme dynamicBgClr" href="projects/project-1" target="_blank">Case Study</a>
        </div>
      </div>
      <br />
      <br />
      <div class="projects__row">
        <div class="projects__row-img-cont">
          <img src="https://res.cloudinary.com/dsaaaqnqj/image/upload/t_laptop2/v1703098663/Untitled_design-7_utqjso.png" alt="Software Screenshot" className="projects__row-img" />
        </div>
        <div class="projects__row-content">
          <h3 class="projects__row-content-title">MERN STACK E-COMMERCE APP</h3>
          <p class="projects__row-content-desc">
          E-commerce website for users to purchase laptops with 8 Advanced filtering searching products.

          </p>
          <a class="btn btn--med btn--theme dynamicBgClr" href="projects/project-2" target="_blank">Case Study</a>
        </div>
      </div>
      <div class="projects__row">
        <div class="projects__row-img-cont">
          <img src="https://res.cloudinary.com/dtq1qzwxn/image/upload/c_crop,g_auto,h_700,w_1100/qkgm8gjb3phjsqmykw6l.jpg" alt="Software Screenshot" className="projects__row-img" /> 
        </div>
        <div class="projects__row-content">
          <h3 class="projects__row-content-title">ANGULAR & JAVA ECOMMERCE APP</h3>
          <p class="projects__row-content-desc">
          E-commerce website for customer to purchase products with search by keywords and user authentication


          </p>
          <a class="btn btn--med btn--theme dynamicBgClr" href="projects/project-3" target="_blank">Case Study</a>
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

export default Projects;