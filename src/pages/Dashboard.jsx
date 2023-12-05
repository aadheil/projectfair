import React, { useEffect, useState } from 'react'
import HeaderForDashb from '../Components/HeaderForDashb'
import Profile from '../Components/Profile'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddProjects from '../Components/AddProjects';
import Myprojects from '../Components/Myprojects';

function Dashboard() {
  const[username,setUsername]=useState("")
  useEffect(()=>{
    if(localStorage.getItem("existingUser")){
      setUsername(JSON.parse(localStorage.getItem("existingUser")).username)
    }
  },[])
  return (
    <>
     <HeaderForDashb className='mb-5'/>

    <div>
    <h2 className='ms-5' style={{marginTop:'100px'}}>Welcome <span className='text-danger'>{username}</span></h2>
    </div>

    <div className='row mt-5'>
      <div className='col-lg-1'></div>
      <div className='col-lg-5 shadow flex-column bg-primary rounded' style={{height:'100%'}} >
        <div className='d-flex justify-content-between ms-3 mt-5'>
          <h3>My Projects</h3>
          <button className='btn btn-danger me-3'><AddProjects/></button>
        </div>
        
       
       <Myprojects/>
         

        

        {/* <div className='w-100 d-flex justify-content-center align-items-center mt-5' style={{height:'100%'}}>
          <Myprojects/>
        </div> */}

         
      </div>
      
      <div className='col-lg-1 '></div>


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