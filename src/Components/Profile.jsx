import React, { useEffect, useState } from 'react'
import { updateProfileApi } from '../services/allApis'
import { BASEURL } from '../services/baseUrl'

function Profile() {
  const[existingimage,setexistingimage]=useState("")
  const [userProfile,setUserProfile]=useState({
    _id:JSON.parse(localStorage.getItem("existingUser"))._id,
    username:JSON.parse(localStorage.getItem("existingUser")).username,
    email:JSON.parse(localStorage.getItem("existingUser")).email,
    password:JSON.parse(localStorage.getItem("existingUser")).password,
   github:"",linkdein:"",profileImage:""




  })
  const[preview,setPreview]=useState("")
  useEffect(()=>{
    if(userProfile.profileImage){
      setPreview(URL.createObjectURL(userProfile.profileImage))
    }
    else{
      setPreview("")
    }
  },[userProfile.profileImage])
  console.log(userProfile);

  const handleupdate=async(e)=>{
     e.preventDefault()
     const{_id,username,email,password,github,linkdein,profileImage}=userProfile
     if(!_id || !username || !email || !password || !github || !linkdein){
      alert("Please fill the form completely")
     }
     else{
      const reqBody=new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkdein",linkdein)
      reqBody.append("profileImage",profileImage)
      const token=sessionStorage.getItem("token")
      if(preview){
       const reqHeader={
          "Content-Type":"multipart/form-data", "Authorization":`Bearer ${token}`

        }
        const result=await updateProfileApi(reqBody,reqHeader)
        if(result.status===200){
          alert("profile updated")
          setUserProfile({
            _id:result.data._id,
    username:result.data.username,
    email:result.data.email,
    password:result.data.password,
   github:result.data.github
   ,linkdein:result.data.linkdein,
   profileImage:""
          })
          setexistingimage(result.data.image)
        }else{
          alert("Profile Updation Failed")
        }
      }
      else{
        const reqHeader={
          "Content-Type":"application/json", "Authorization":`Bearer ${token}`
        }
        const result=await updateProfileApi(reqBody,reqHeader)
        if(result.status===200){
          alert("profile updated")
          setUserProfile({
            _id:result.data._id,
    username:result.data.username,
    email:result.data.email,
    password:result.data.password,
   github:result.data.github
   ,linkdein:result.data.linkdein,
   profileImage:""
          })
          setexistingimage(result.data.image)

        }else{
          alert("Profile Updation Failed")
        }
      }
     }
  }
  return (
    <div className='card shadow p-5 w-100 bg-primary' >
      <div className='d-flex justify-content-between'>
        <h3>My Profile</h3>
        <button className='btn btn-light' onClick={handleupdate}><i className='fa-solid fa-check text-danger'></i></button>
      </div>

      <div className='row justify-content-center mt-3'>
        <label htmlFor="profile" className='text-center'>
            <input id='profile' type="file" style={{display:'none'}} onChange={e=>setUserProfile({...userProfile,profileImage:e.target.files[0]})} />
            <img src={preview?preview:`${BASEURL}/uploads/${existingimage}`} className='w-50 rounded-circle' alt="Update Image" />
        </label>

        {/* <div className='mb-2 mt-2'>
          <input type="text" className='form-control' placeholder='Username' />
        </div> */}

        <div className='mb-2 mt-2'>
          <input type="text" className='form-control' placeholder='Github Profile Link' value={userProfile.github} onChange={e=>setUserProfile({...userProfile,github:e.target.value})}/>
        </div>

        <div className='mb-2'>
          <input type="text" className='form-control' placeholder='Linkdein Profile Link' value={userProfile.linkdein} onChange={e=>setUserProfile({...userProfile,linkdein:e.target.value})}/>
        </div>
        
      </div>
    </div>
  )
}

export default Profile