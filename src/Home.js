import React from 'react'
import FeaturedProducts from './components/FeaturedProducts'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'

const Home = () => {

  const data={
    name: "Debug Store"
  }
  return (
    <>
    <HeroSection mydata={data} />
    <FeaturedProducts />
    <Services />
    <Trusted /> 
    </>
  )
}


export default Home