import React from 'react'
import Navbar from './components/Navbar'
import {Routes , Route} from "react-router-dom"
import {HomePage , ProfilePage , SettingsPage , SigninPage , SignupPage} from "./pages/index"

const App = () => {
  return (
    <div className='text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/signup' element={ <SignupPage /> } />
        <Route path='/signin' element={ <SigninPage /> } />
        <Route path='/profile' element={ <ProfilePage /> } />
        <Route path='/settings' element={ <SettingsPage /> } />
      </Routes>

    </div>
  )
}

export default App
