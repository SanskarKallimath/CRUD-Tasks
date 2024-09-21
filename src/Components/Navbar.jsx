import React from 'react';
import { FaHome, FaChevronRight, FaUpload } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { AiFillFund } from "react-icons/ai";
import './Navbar.css';

const Navbar = () => {

  return (
    <>
      <div className='Upperdiv'>
     
        <h2 className='AutoProfito'>AutoProfito</h2>
        <div className='TimeAndDate'>
          <h4>Thu 19 Sept</h4>
          <h2>06:58PM</h2>
        </div>
        <div className='Harry'>
          <div>
            <h2>HARRY POTTER</h2>
            <h4 className='Teacher'>Teacher</h4>
          </div>
          <CgProfile className='Pro'/>
        </div>
      </div>

      <div className="navbar">
      <div className="navbar-links">
        <div className="nav-item">
          <FaHome className="icon" />
          <span>Home</span>
        </div>
        <div className="nav-item manage-student">
          <CgProfile className="icon" />
          <span>Manage Student</span>
        </div>
        <div className="nav-item">
          <AiFillFund className="icon" />
          <span>Trade</span>
        </div>
      </div>
    </div>
    <div className="third-part-container">
      {/* Left Section with Home Icon */}
      <div className="breadcrumb">
        <FaHome className="home-icon" />
        <FaAngleRight className="angle-right-icon" />
        <span>Manage Student</span>
      </div>

      {/* Center Section with Title */}
      

      {/* Right Section with Copy Trading and Broker */}
      <div className="copy-trading-section">
        <h4>Copy Trading: Free</h4>
        <select className="broker-dropdown">
          <option>Broker</option>
          <option>Broker 1</option>
          <option>Broker 2</option>
        </select>
      </div>
    </div>
      

     
    </>
  );
};

export default Navbar;
