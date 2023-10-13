import React from 'react'
import './services.css'
import Navbar from '../../Components/Navbar/Navbar'
import HService from '../../Components/ServicesHome/HomeService'
import Background from '../../Components/Background/Background'
import Footer from '../../Components/Footer/Footer'

const Services = () => {
  return (
    <>
        <Navbar />
        <Background home="Home" section="Services"/>
        <HService />
        <div className="services"></div>
        <Footer />
    </>
  )
}

export default Services