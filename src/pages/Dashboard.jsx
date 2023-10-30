import React from 'react'
import HeaderForDashb from '../Components/HeaderForDashb'
import Profile from '../Components/Profile'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddProjects from '../Components/AddProjects';

function Dashboard() {
  
  return (
    <>
     <HeaderForDashb className='mb-5'/>

    <div>
    <h2 className='ms-5' style={{marginTop:'100px'}}>Welcome User</h2>
    </div>

    <div className='row mt-5'>
      <div className='col-lg-1'></div>
      <div className='col-lg-5 shadow flex-column bg-primary rounded' style={{height:'100%'}} >
        <div className='d-flex justify-content-between ms-3 mt-5'>
          <h3>My Projects</h3>
          <button className='btn btn-danger me-3'><AddProjects/></button>
        </div>
        
       
        <div className='d-flex mt-5 justify-content-between border align-items-center p-1 rounded text-center mt-4 mb-4'>
        <h4>Project Title </h4>
        <div className='d-flex'  >
        <button className='btn'><i class="fa-regular fa-pen-to-square text-danger  "></i></button>
        <button className='btn'><i className='fa-solid fa-trash text-danger '></i></button> 
        <button className='btn'><i className='fa-brands fa-github text-danger'></i></button> 
        </div>
        </div>
         

        <div className='mt-5 ms-3'>
          <p className='text-danger fw-bolder'>No Projects Found</p>
        </div>



         
      </div>
      
      <div className='col-lg-1'></div>


      {/* profile */}
      <div className='col-lg-4  '>
       <Profile/>
      </div>




      <div className='col-lg-1'></div>
    </div>

    </>
  )
}

export default Dashboard