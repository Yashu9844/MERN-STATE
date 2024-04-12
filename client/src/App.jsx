import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import SignUp from './pages/SignUp'
import PrivateRoute from './components/PrivateRoute'

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
        </Route>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
