import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'
import Service from './Components/Service'
import OurWork from './Components/OurWork'
import Teams from './Components/Teams'
import ContactUs from './Components/ContactUs'
import {Toaster} from 'react-hot-toast'


const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Service/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
    </div>
  )
}

export default App
