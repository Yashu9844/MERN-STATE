import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7 '>Profile</h1>
      
<form  className='flex flex-col gap-6'>
<img  className='self-center  mt-2 rounded-full h-24 w-24 objext-cover cursor-pointer'        src={currentUser.avatar} alt="profile pic" />
<input id='username'   type="text" placeholder='username' className='border p-3 rounded-lg' />
<input id='email'  type="email" placeholder='email' className='border p-3 rounded-lg' />
<input id='password'   type="password" placeholder='password' className='border p-3 rounded-lg' />
<button className='uppercase bg-slate-700 p-3 rounded-lg text-white'>update</button>
<button className='uppercase bg-green-700 p-3 rounded-lg text-white'>Create listing</button>
       
</form>
<div className="flex justify-between mt-3
">
  <span className='text-red-700 cursor-pointer'>Delete account</span>
  <span  className='text-red-700 cursor-pointer'>Sign out</span>
</div>
    <div className="flex justify-center ">
      <span className='text-green-700 '>Show listings</span>
    </div>
    </div>
  )
}

export default Profile
