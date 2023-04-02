import React from 'react'
import HeroSection from './components/HeroSection'
// import { AppContext, AppProvider } from './context/ProductContext'
import { useProductContext } from "./context/ProductContext";


const About = () => {

  // const {myName}=useContext(AppContext)
  const { myName } = useProductContext();

  const data={
    name: "debug Ecommerce"
  }
  return (
    <>
    {myName}
    <HeroSection mydata={data} />
    </>
  )
}

export default About