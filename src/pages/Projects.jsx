import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectApi } from '../services/allApis'

function Projects() {
  const[allprojects,setallprojects]=useState([])
  const[searchkey,setSearchkey]=useState("")
  const getallprojects=async(token)=>{
    const reqHeader={
      "Content-Type":"application/form-data", "Authorization":`Bearer ${token}`
    }
   const result = await allProjectApi(searchkey,reqHeader)
   console.log(result);
   if(result.status===200){
     setallprojects(result.data)
     // console.log(allprojects);
   }
   else{
     alert(result.response.data)
   }
  }


  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const token=sessionStorage.getItem("token")
      getallprojects(token)
    }
    else{
      alert("Please Login")
    }

  },[searchkey])



  // useEffect(()=>{
  //   getallprojects()
  // },[])
  return (
    <>
   <Header/>
   
   {/* all projects */}
   <div className='text-center' style={{marginTop:'100px'}}>
      <h1 className='mt-5 mb-5'>All Projects</h1>
      {/* search */}
      <div className='d-flex mb-5 justify-content-center w-100'>
        <div className='d-flex w-50 align-items-center p-1 rounded'>
        <input className='form-control shadow' placeholder='Searcg By Technoogies' onChange={e=>setSearchkey(e.target.value)}/>
        <div className='btn' style={{marginLeft:'-50px'}} ><i className='fa-solid fa-magnifying-glass text-info'></i></div>
        </div>
      </div>

      <div className='container'>
       <Row>
        {allprojects.length>0?allprojects.map(project=>(
          <Col sm={12} md={6} lg={4}>
          <ProjectCard project={project} />
          </Col>
        )): null
        }
       </Row>
      </div>
   </div>


    </>
  )
}

export default Projects