import React from 'react';
import{Link} from "react-router-dom";
import {Men,Women} from "../product-listing/product-listing-import";
import "./css/home.css"



const Home = () => {
  return (
    <>
      <div className="home-header">
        <div className="home-header-item">
        <Link to="/women">
          <img src="https://pacific-store.netlify.app/img/women/women2.jpg" alt="" className="img-sqr home-head-img" />
          <div className="home-header-txt">Women</div>
          </Link>
        </div>
        <div className="home-header-item">
        <Link to="/men">
          <img src="https://pacific-store.netlify.app/img/daydeal/vcollor2.jpg" alt="" className="img-sqr home-head-img" />
          <div className="home-header-txt">Men</div>
          </Link>
        </div>
        <div className="home-header-item-rec">
        <Link to="/offer">
          <img src="https://media.istockphoto.com/photos/elegant-young-woman-with-shopping-bags-standing-on-the-street-picture-id1148925683?k=20&m=1148925683&s=612x612&w=0&h=2j6pw-VmcK8dV2PiY248puMXR_Al71cnftdlnLJffVI=" alt="" className="img-sqr home-head-img-rec" />
          <div className="home-header-txt">Offers</div>
          </Link>
        </div>

      </div>
    </>
  )
}

export default Home