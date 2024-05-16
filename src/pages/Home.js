import React from 'react';
import "./Home.scss";
import { Link } from 'react-router-dom';

const Home = () => {

  const style = { marginTop: 100 };  

  

    return (
      <>
        <div class="px-4 py-5 my-5 text-center ">
          <img
            class="d-block mx-auto mb-4"
            src="https://res.cloudinary.com/dsaaaqnqj/image/upload/v1703034052/e277a8e6dfab58e9321cdd4510ef4c04_a83nrm.png"
            alt=""
            width="150"
            height="100"
            style={style}
          />

          <h2 className="display-5 fw-bold">Hey, I'm Sylvia Zhang</h2>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">A Full-Stack Developer.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
          </div>
        </div>

        <div className="container">
          <div class="box">
            <div class="imgBx">
              <img
                src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                onclick="linkP1()"
              />
            </div>
            <Link to={"/projects/ecommerce"}>
              <div class="content">
                <div>
                  <h2>MERN STACK ECOMMERCE APP</h2>
                  <p>ReactJS, NodeJS, ExpressJS, MongoDB</p>
                </div>
              </div>
            </Link>
          </div>

          <div class="box">
            <div class="imgBx">
              <img src="https://images.unsplash.com/photo-1525373612132-b3e820b87cea?q=80&w=2341&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <Link to={"/projects/partyEasy"}>
              <div class="content">
                <div>
                  <h2>PartyEasy APP</h2>
                  <p>React, TypeScript, MySQL</p>
                </div>
              </div>
            </Link>
          </div>

          <div class="box">
            <div class="imgBx">
              <img src="https://images.unsplash.com/photo-1570143675316-51a19f90a943?q=80&w=2774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <Link to={"/projects/sharePlace"}>
              <div class="content">
                <div>
                  <h2>PLACE SHARING APP MERN STACK</h2>
                  <p>ReactJS, NodeJS, ExpressJS, MongoDB</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div class="px-4 py-5 my-5 text-center">
          <h2 class="display-5 fw-bold"></h2>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4"></p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
          </div>
        </div>
      </>
    );}

export default Home;