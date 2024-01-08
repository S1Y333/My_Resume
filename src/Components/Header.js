import  React, { useState } from 'react';

import { Link } from 'react-router-dom';
import '../pages/Home.css';

const Header = () => {
 


    return (<>
    
  {/* <header class="main-header fixed-top ">
    <div class="header__content">
      <div class="header__logo-container">
        <div class="header__logo-img-cont">
          <img src="https://i.postimg.cc/HxtmpLvN/Screen-Shot-2018-02-11-at-8-40-36-AM.png" alt="Sylvia Zhang Logo Image" class="header__logo-img" ></img>
        </div>
        <span class="header__logo-sub">Sylvia Zhang</span>
      </div>
      <div class="header__main">
      <ul class="header__links">
    <li class="header__link-wrapper">
      <Link to="/" class="header__link"> Home </Link>
    </li>
    <li class="header__link-wrapper">
      <Link to="/about" class="header__link">About </Link>
    </li>
    <li class="header__link-wrapper">
      <Link to="/projects" class="header__link"> Projects </Link>
    </li>
    <li class="header__link-wrapper">
      <Link to="/contact" class="header__link"> Contact </Link>
    </li>
  </ul>
        <div class="header__main-ham-menu-cont">
          <img src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg" alt="hamburger menu" class="header__main-ham-menu" ></img>
          <img src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg" alt="hamburger menu close" class="header__main-ham-menu-close d-none"></img>
        </div>
      </div>
    </div> 
    <div class="header__sm-menu">
      <div class="header__sm-menu-content">
      <ul class="header__links">
    <li class="header__link-wrapper">
      <Link to="/" class="header__link"> Home </Link>
    </li>
    <li class="header__link-wrapper">
      <Link to="/about" class="header__link">About </Link>
    </li>
    <li class="header__link-wrapper">
      <Link to="/projects" class="header__link"> Projects </Link>
    </li>
    <li class="header__link-wrapper">
      <Link to="/contact" class="header__link"> Contact </Link>
    </li>
  </ul>
      </div>
    </div>
   
   </header> */}

<nav class="navbar navbar-expand-md navbar-light fixed-top bg-light navbar-right">

<Link to="/">
   <div class="header__logo-container mr-5">
        <div class="header__logo-img-cont" >
          <img src="https://i.postimg.cc/HxtmpLvN/Screen-Shot-2018-02-11-at-8-40-36-AM.png" alt="Sylvia Zhang Logo Image" class="header__logo-img" ></img>
        </div>
        <span class="header__logo-sub">Sylvia Zhang</span>
     </div>
</Link>
      <div class="header__main ms-auto" >
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarCollapse" >
        <ul class="navbar-nav ms-auto ">
        <li class="nav-item active">
      <Link to="/" class="header__link"> Home </Link>
    </li>
    <li class="header__link-wrapper">
      <Link to="/about" class="header__link">About </Link>
    </li>
    <li class="header__link-wrapper">
      <Link to="/projects" class="header__link"> Projects </Link>
    </li>
    <li class="header__link-wrapper">
      <Link to="/contact" class="header__link"> Contact </Link>
    </li>
         
        </ul>
      
      </div>
    </div>
    </nav>
  </>)
}

export default Header