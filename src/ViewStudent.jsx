import React from 'react'
import Navbar from './Components/Navbar';
import './ViewStudent.css'
import { BiSupport } from "react-icons/bi";
import { MdOutlineHelpCenter } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";


import { useState } from "react";

const ViewStudent = () => {

    const [isToggled, setIsToggled] = useState(false);
    const [issecondToggled, setIssecondToggled] = useState(true);

  
  return (
   <>
    <Navbar/>
    <div className="maincard">
          <div className="headnav">
             <button style={{height:"40px",width:"65px",marginTop:"5px", marginLeft:"100px",  borderradius: "10px",border: "2px solid #0b0b0b" }}>
          
              Back</button>
             <h5 style={{marginLeft:"400px"}}>View Student</h5>

              {/* for toggle buttons */}
            <div style={{display:"flex",flexDirection:"row",marginLeft:"300px"}}>
              <div>
              <button
                 onClick={() => setIsToggled(!isToggled)}
                  style={{
                          width: '50px',
                           height: '22px',
                           backgroundColor: isToggled ? 'green' : 'gray',
                           borderRadius: '10px',
                        
                         position: 'relative',
                         cursor: 'pointer',
                         padding: '0',
                       }}
                     >
             <div
                   style={{
                      width: '15px',
                       height: '15px',
                      backgroundColor: 'white',
                       borderRadius: '20%',
                       position: 'absolute',
                       top: '2px',
                       left: isToggled ? '32px' : '2px',
                       transition: 'left 0.3s',
        }}
      />
    </button>
                   <h6 style={{marginTop:"9px"}}>Trade Status</h6>
               </div>
               <div style={{marginLeft:"20px"}} >
               <button
                 onClick={() => setIssecondToggled(!issecondToggled)}
                  style={{
                          width: '50px',
                           height: '22px',
                           backgroundColor: issecondToggled ? 'green' : 'gray',
                           borderRadius: '10px',
                        
                         position: 'relative',
                         cursor: 'pointer',
                         padding: '0',
                       }}
                     >
             <div
                   style={{
                      width: '15px',
                       height: '15px',
                      backgroundColor: 'white',
                       borderRadius: '20%',
                       position: 'absolute',
                       top: '2px',
                       left: issecondToggled ? '32px' : '2px',
                       transition: 'left 0.3s',
        }}
      />
    </button>
                   <h6 style={{marginTop:"9px"}}>Account Status</h6>
               </div>
             </div>
              
          </div>
          {/* headnav complete */}
  
             <p style={{marginLeft:"30px",fontSize:"20px",marginTop:"0px",marginBottom:"0px"}}>Personal Information</p>
             <div className="prinformation">
                 <div style={{display:"flex",flexDirection:"column"}}>
                     <h5 style={{marginBottom:"0px"}}>Rosy</h5>
                     <p>Name</p>
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                     <h5 style={{marginBottom:"0px"}}>2483898429</h5>
                     <p style={{marginTop:"9px"}}>Mobile</p>
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                     <h5 style={{marginBottom:"0px"}}>rosy@gmail.com</h5>
                     <p style={{marginTop:"9px"}}>Email</p>
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                     <h4 style={{marginBottom:"0px",color:"#90EE90"}}>Connected</h4>
                     <p style={{marginTop:"9px"}}>Broker Conn, Status</p>
                 </div>
             </div>
               <div style={{display:"flex",flexDirection:"row",marginLeft:"100px",gap:"135px"}}>
               <div style={{display:"flex",flexDirection:"column"}}>
                     <h5 style={{marginBottom:"0px"}}>1 Lot</h5>
                     <p style={{marginTop:"9px"}}>Lot Size Limit</p>
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                     <h5 style={{marginBottom:"0px"}}>100%</h5>
                     <p style={{marginTop:"9px"}}>Commission</p>
                 </div>
               </div>

               <p style={{marginLeft:"30px",fontSize:"20px",marginTop:"10px",marginBottom:"0px"}}>Broker Information</p>
               <div className="brokerinforamtion">
               <div style={{display:"flex",flexDirection:"column"}}>
                     <h5 style={{marginBottom:"0px"}}>Fh7Yx6V6</h5>
                     <p style={{marginTop:"9px"}}>Broker Api Key</p>
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                     <h5 style={{marginBottom:"0px"}}>V405113</h5>
                     <p style={{marginTop:"9px"}}>Broker Client Id</p>
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                     <h5 style={{marginBottom:"0px"}}>3792</h5>
                     <p style={{marginTop:"9px"}}>Broker Password</p>
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                     <h5 style={{marginBottom:"0px"}}>BVRHBRPZV7XRLWEDv3GUK26YGA</h5>
                     <p style={{marginTop:"9px"}}>Broker QR TOTP Token</p>
                 </div>
               </div>
               
        </div>

        <div className='support'>
    <BiSupport  />
    <h6>Support</h6>
    <MdOutlineHelpCenter />
    <h6>Help Center</h6>
    </div> 

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

export default ViewStudent;
