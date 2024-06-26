
import {FaSearch} from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import {useSelector} from  'react-redux'
import { useEffect, useState } from 'react'

const Header = () => {

 const {currentUser} = useSelector((state)=>state.user)
const [searchTerm ,setSearchTerm] = useState('');
const navigate = useNavigate();

const handleSubmit = (e)=>{
  e.preventDefault();
  const urlparams = new URLSearchParams(window.location.search);
  urlparams.set('searchTerm',searchTerm);
  const searchQuery = urlparams.toString();
  navigate(`/search?${searchQuery}`)

}

useEffect(()=>{
  const urlparams = new URLSearchParams(location.search);
  const searchTErmFromURL = urlparams.get('searchTerm');
  if(searchTErmFromURL){
    setSearchTerm(searchTErmFromURL)
  }
},[location.search])
  return (
  <header className='bg-slate-200 shadow-md'>

<div className="flex justify-between items-center max-w-6xl mx-auto p-3">




  <Link to={'/'}> 
<h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Yashwanth</span>
        <span className='text-slate-700'>Estate</span>
      </h1>
  </Link>

      <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
       <button> <FaSearch className='text-slate-500'/></button>
      </form>
      <ul className='flex gap-4'>
        <Link to={'/'}>
        <li className='hidden sm:inline text-slate-800 hover:underline'>Home</li>
        </Link>
        <Link to={'/about'}>  <li  className='hidden sm:inline text-slate-800 hover:underline'>About</li></Link>
        <Link to={'/profile'}> 
        {currentUser ? (
          <img className='rounded-full object-center object-cover h-7 w-7  '   src={currentUser.avatar} alt="profile" />
        ) : (<li  className=' sm:inline text-slate-800 hover:underline'>Sign in</li>
          
        )
         }
</Link>

        
      </ul>
</div>

      
  </header>
  )
}

export default Header
