import React, { useContext, useEffect, useState } from 'react'
import { deleteProjectApi, userProjectApi } from '../services/allApis'
import { addProjectResponseContext, editProjectResponseContext } from '../Context/ContextShare'
import EditProject from './EditProject'

function Myprojects() {

    const {addprojectresponse,setAddprojectresponse}=useContext(addProjectResponseContext)
    const {editprojectresponse,setEditprojectresponse}=useContext(editProjectResponseContext)

    const[projects,setProjects]=useState([])
    const[token,setToken]=useState("")
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setToken(sessionStorage.getItem("token"))
        }            
    },[])

    useEffect(()=>{
        if(token){
            getUserProjects()
        }
    },[token,addprojectresponse,editprojectresponse])
    
    const getUserProjects=async()=>{
        
        const reqHeader={
            "Content-Type":"application/json", "Authorization":`Bearer ${token}`
        }
        const result=await userProjectApi(reqHeader)
        if(result.status===200){
            console.log(result.data);
            setProjects(result.data)
        }
        else{
            alert(result.response.data)
        }
    }
   

    // setTimeout(function(){
        
    //         if(token){
    //             getUserProjects()
    //         }
        
    //     },500);

    const handleDelete = async(e,id)=>{
        e.preventDefault()
        const reqHeader={
            "Content-Type":"application/json", "Authorization":`Bearer ${token}`
          }
        // alert(id)
    const result=await deleteProjectApi(id,reqHeader)
    if(result===200){
      getUserProjects()
    }else{
        console.log(result);
        getUserProjects()
        // alert("Transaction failed")
    }
    
    }
    
  return (
    <div className='mt-4  '>
        {projects?.map((item)=>(
            <div className='d-flex mt-5 justify-content-between border align-items-center p-1 rounded text-center mt-4 mb-4'>
            <h4>{item.title} </h4>
            
            <div className='d-flex'  >
            <EditProject displayData={item} />

            <button className='btn' onClick={(e)=>handleDelete(e,item._id)}><i className='fa-solid fa-trash text-danger '></i></button> 
            <a href={`${item.github}`} target='_blank' className='btn'><i className='fa-brands fa-github text-danger'></i></a> 
            </div>
            </div>
            
        ))}
        {/* <h1 onClick={getUserProjects}>ge</h1> */}
    </div>
  )
}

export default Myprojects