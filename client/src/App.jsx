import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import SignUp from './pages/SignUp'
import PrivateRoute from './components/PrivateRoute'
import MainPage from './pages/MainPage'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'



const App = () => {
  return (

    <BrowserRouter>
       <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
      
        <Route path='/about' element={<About/>}/>
        <Route  element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/create-listing' element={<MainPage/>} /> 
        <Route path='/update-listing/:listingId' element={<UpdateListing/>} /> 
        </Route>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/listing/:listingId' element={<Listing/>}/>
        <Route path='/search' element={<Search/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
