import React from 'react';
import { MdGridView } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import {  FaUpload } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdOutlineHelpCenter } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
const studentData = [
  {
    id: 1,
    name: 'Rosy',
    lotSizeLimit: '1 Lot',
    commission: '10%',
    brokerStatus: 'Connected',
    brokerName: 'AngelOne',
    actions: 'edit delete'
  },
  {
    id: 2,
    name: 'John',
    lotSizeLimit: '1 Lot',
    commission: '10%',
    brokerStatus: 'Not Connected',
    brokerName: 'Broker Not Connected',
    actions: 'edit delete'
  }
];

const Table = () => {
  const navigate = useNavigate();
  const handleCreateStudent = () => {
    navigate('/create-student'); 
  };
  const handleUpdateStudent=()=>{
    navigate('/Update-student')
  };
  const handleViewStudent=()=>{
    navigate('/view-student')
  };
  return (
    <>
     <section className='Table'>
        <div className='BackAndManageStudent'>
          <div className='BackButton'>
            <button>Back</button>
          </div>
          
        </div>

        <div className='SearchAndCreate'>
          <input className='SearchBoxInput' placeholder='Search' type="text" />
          <div className='UploadAndCreateButton'>
            <button><FaUpload /></button>
            <button className='createStudent' onClick={handleCreateStudent}>
              <IoAddCircleOutline /> Create Student
            </button>
          </div>
        </div>

       
      
     <div className="table-container">
      <div className="table-header">
        
        
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Lot Size Limit</th>
            <th>Commission</th>
            <th>Broker Conn. Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.lotSizeLimit}</td>
              <td>{student.commission}</td>
              <td className={student.brokerStatus === 'Connected' ? 'connected' : 'not-connected'}>
                {student.brokerStatus === 'Connected' ? student.brokerName : 'Broker Not Connected'}
              </td>
              <td>
                <button onClick={handleViewStudent}  className="view-btn"><MdGridView /></button>
                <button className="delete-btn"><MdCancelPresentation /></button>
                <button onClick={handleUpdateStudent} className='  edit-btn'><CiEdit /> </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> 

    </div>
    </section>


    
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
    
   
  );
};

export default Table;
