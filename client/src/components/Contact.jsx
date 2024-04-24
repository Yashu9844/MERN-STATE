
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = ({listing}) => {
    const [landlord,setLandLord]= useState(null);
     const [message,setMessage] = useState(null);
    useEffect(()=>{
        const fetchLandlord = async ()=>{
            
            const res = await fetch(`/api/user/${listing.userRef}`)
            const data = await res.json();
            setLandLord(data)
        }
        fetchLandlord();
    },[listing.userRef])
   
    const onChange = (e)=>{
        setMessage(e.target.value)
    }
  return (
   <>
   {landlord && (
    <div className=" flex flex-col gap-5 ">
        <p >Contact <span className='font-semibold'>{landlord.username} </span> for <span className='font-semibold'>
            {listing.name.toLowerCase()}</span></p>

            <textarea name='message' id='message' rows='2' value={message} onChange={onChange} placeholder='Enter your messaeg here...' 
            className='w-full border p-3 rounded-lg '></textarea>
            <Link to={`mailto:${landlord.email}?subject=Regarding%20${listing.name}&body=${message}`}
            className='bg-slate-700 text-center p-3 uppercase text-white rounded-lg hover:opacity-95 '>
            Send Message
            
            </Link>
    </div>
   )}
   
   </>
  )
}

export default Contact
