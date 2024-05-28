import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Main from './components/Main'
import {  Route,  Routes } from 'react-router-dom';
import Profile from './components/Profile'
import Notes  from './components/Notes'
import Vault  from './components/Vault'


function App() {
  return (
   
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/"  element= {<Main/>} />
          <Route path="/login" element= {<Login/>} />
          <Route path="/register" element= {<Signup/>} />
          <Route path="/profile"  element= {<Profile/>} />
          <Route path="/notes"  element= {<Notes/>} />
          <Route path="/vault"  element= {<Vault/>} />
        </Routes>
        <Footer/>
      </div>
    
  )
}

export default App
