import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { useRef } from 'react'
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from 'firebase/storage'
import { app } from '../firebase'



const Profile = () => {
  const {currentUser} = useSelector((state) => state.user);
  const [file,setFile] = useState(null)
  const fileRef = useRef(null)
  const [filePerc , setFilePerc] = useState(0);
  const [fileUploadError,setFileUploadError] = useState(false)
  const [formdata ,setFormData]=useState({})
console.log(formdata)
  useEffect(()=>{
    if(file){
      handleFileUpload();
    }
  },[file])

  const handleFileUpload=()=>{
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage,fileName);
    const uploadTask = uploadBytesResumable(storageRef,file);
  

    uploadTask.on('state_changed',(snapshot)=>{
      const progress = ( snapshot.bytesTransferred / snapshot.totalBytes)*100;
      setFilePerc(Math.round(progress))
 },
    

   (error) =>{
    setFileUploadError(true);
   },
   ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((downoladURL)=>
      setFormData({...formdata,avatar:downoladURL})
    )
   }
    )
  }




  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7 '>Profile</h1>
      
<form  className='flex flex-col gap-6'>
  <input onChange={(e)=>setFile(e.target.files[0])}  type="file" ref={fileRef} hidden accept='image/*' />
<img onClick={()=>fileRef.current.click()} className='self-center  mt-2 rounded-full h-24 w-24 objext-cover cursor-pointer'  src={formdata.avatar || currentUser.avatar} alt="profile pic" />

<p className='text-lg self-center'>
  {fileUploadError ? (
    <span className='text-red-600'>Error uploading image (image must be less then 2 MB)</span>
  ) : (
    <>
      {filePerc > 0 && filePerc < 100 ? (
        <span className='text-slate-700'>
          {`Uploading ${filePerc}%`}
        </span>
      ) : (
        filePerc === 100 && (
          <span className='text-green-600'>Image successfully uploaded</span>
        )
      )}
    </>
  )}
</p>


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
