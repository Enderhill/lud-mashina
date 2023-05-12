import React from 'react'
import Navabar from '../../Navbar/Navabar'
import FirstSection from '../FirstSection/FirstSection'
import Footer from '../Footer/Footer'
import SecondSection from '../SecondSection/SecondSection'

const Home = () => {
  return (
    <div>
    <Navabar/>    
    <FirstSection/> 
    <SecondSection/>
    <Footer/>
    </div>
  )
}

export default Home
