import React from 'react'

function Profile() {
  return (
    <div className='card shadow p-5 w-100 bg-primary'>
      <div className='d-flex justify-content-between'>
        <h3>My Profile</h3>
        <button className='btn btn-light'><i className='fa-solid fa-check text-danger'></i></button>
      </div>

      <div className='row justify-content-center mt-3'>
        <label htmlFor="profile" className='text-center'>
            <input id='profile' type="file" style={{display:'none'}} />
            <img src="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-male-circle2-512.png" className='w-50 rounded-circle' alt="" />
        </label>

        <div className='mb-3 mt-4'>
          <input type="text" className='form-control' placeholder='Username' />
        </div>

        <div className='mb-3'>
          <input type="text" className='form-control' placeholder='Github Profile Link' />
        </div>

        <div className='mb-3'>
          <input type="text" className='form-control' placeholder='Linkdein Profile Link' />
        </div>
        
      </div>
    </div>
  )
}

export default Profile