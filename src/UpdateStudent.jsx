import React from 'react'
import Navbar from './Components/Navbar'
import { CgProfile } from "react-icons/cg";
import './CreateStudent.css';
import { BiSupport } from "react-icons/bi";
import { MdOutlineHelpCenter } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
const UpdateStudent = () => {
  return (
    <>
    <Navbar/>
    <section className='createStudent-section'>
  <div className='first-div'>
    <button className='back-button'>Back</button>
    <h2 className='createStudent-text'>Update Student</h2>
  </div>
  <div className='second-div'>
  <CgProfile className='Profile-icone' />
    <h2 className='personal-information-text'>Personal Information</h2>
  </div>
  <div className='third-div'>
       <textarea className='name-text' placeholder='*Name' name="" id=""></textarea>
       <textarea className='email-text' placeholder='*Email' name="" id=""></textarea>
       <textarea className='mobilenumber-text' placeholder='*Mobile Number' name="" id=""></textarea>
      
       <textarea className='lotsize-limit' name="" placeholder='Lot Size' id="otsize-limit"></textarea>
       <textarea className='commission' placeholder='Commission' name="" id=""></textarea>
  </div>
  <div className='fourth-div'>
  <input  type='checkbox' id='terms' className='checkbox-input' />
   <h4>Include Border Details</h4>

  </div>
  <hr className='divider' />
  <div className='second-part'>
  <div className='fifth-div'>
  <CgProfile className='second-profile-icone' />
    <h2 className='Broker-information'>Broker Information</h2>
    
  </div>
  <div className='sixth-div'>
    <h4 className='angelone-text'>AngelOne</h4>
    
    
  </div>
  <div className='seventh-div'>
    <textarea placeholder='*Broker Client ID' className='broker-id' name="" id=""></textarea>
    <textarea placeholder='*Broker Password' className='broker-password' name="" id=""></textarea>
    <textarea  placeholder='*Broker QR TOTP Token' className='broker-qr' name="" id=""></textarea>
    <textarea placeholder='*Broker API Key' className='broker-api' name="" id=""></textarea>
  </div>
  </div>
  <div className='save-button-div'>
          <button className='save-data-button'>Save Data</button>
        </div>
  
  
</section>

<div className='last-div'>
    <h4>
                Copyright.All Rights Reserved.
            </h4>
     
        <div className='insta-facebook-icones'>
 
        <FaFacebook className='facebook-icone' />
        <AiFillInstagram className='instagram-icone' />
        <FaYoutube className='youtube-icone' />
        </div>
       
        
        
        <h4>
    Powered by 
    <a href="https://shekru-labs.com" target="_blank" className='powered-link'>
      Shekru Labs India Pvt. Ltd.
    </a>
  </h4>

    </div>

    </>
  )
}

export default UpdateStudent
