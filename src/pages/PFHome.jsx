import React, { useEffect, useState } from 'react'
import {Col, Row } from 'react-bootstrap'
import HomeProjects from '../Components/HomeProjects'
import { Link } from 'react-router-dom'
import { homeProjectsApi } from '../services/allApis'
function PFHome() {
  const [isLoggedIn,setLoggedIn]=useState(false)
 const[allprojects,setallprojects]=useState([])
 const getHomeProjects=async()=>{
  const result =await homeProjectsApi()
  if(result.status===200){
    setallprojects(result.data)
    // console.log(allprojects);
  }
  // else{
  //   alert(result.response.data)
  // }
 }
  useEffect(()=>{
    if(localStorage.getItem("existingUser")){
      setLoggedIn(true)
      
    }
    else{
      setLoggedIn(false)
    }
    
  },[])

  useEffect(()=>{
    getHomeProjects()
  },[])
  return (
    <>
     {/* landing section */}
    <div className="container-fluid rounded bg-info " style={{width:'100%',height:'100vh'}}>
       
    <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
            <h1 style={{fontSize:"55px"}} className='text-dark'><i className='fa-brands fa-stack-overfloe fa-bounce'></i>Project Fair</h1>
            <p className='text-light'>One stop destination for all software development projects. Where user can addd and manage their projects. As well as access all projects available in our website...</p>

            {isLoggedIn?
              <Link to={'/dashboard'} className='btn btn-warning'>Manage Your Projects <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>
             :
              <Link to={'/login'} className='btn btn-warning'>Start to Explore <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>
              }

            

        </Col>
        <Col sm={12} md={6}>
        <img src="https://i.imgur.com/q3NcLTG.png" alt="" style={{marginTop:'100px'}} className='img-fluid w-75' />
        </Col>
    </Row>


    </div>


    {/* glimpse of all projects */}
    {allprojects&&
      <div className="all-projects mt-5">
        <HomeProjects allprojects={allprojects}/>
    </div>}
    
    </>
  )
}

export default PFHome