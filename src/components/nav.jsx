import{Link} from "react-router-dom";
import React from 'react';
import {IoShirt} from "react-icons/io5"
import "./css/nav.css"
import { useData } from "../context/fetchdata";

const Nav
 = () => {
   const {info:{login,user}}=useData()
  return (
    <>
    <nav className="nav">
      <div className="nav-header">
        <Link to="/" className="nav-link">
        <div className="nav-logo">
            <IoShirt className="nav-logo-icn"/>
            Pacific
        </div></Link>
        </div>
        <div className="nav-list">
        <Link className="nav-link" to="/cart"><div className="nav-item">cart</div></Link>
        <Link className="nav-link" to="/wishlist"><div className="nav-item">wishlist</div></Link>
        {!login?(<Link className="nav-link" to="/login"><div className="nav-item nav-login">login</div></Link>):
        (
          <Link to="/user" className="nav-link">
          <div className="avatar-txt avatar-xsm nav-avatar" >
            {user[0].toUpperCase()}
          </div>
          </Link>
        )}
        
        </div>
        
        
    </nav>
    {/* <Search/> */}
    </>
  )
}

export default Nav
