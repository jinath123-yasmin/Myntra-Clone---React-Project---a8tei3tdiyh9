import React from 'react'
import styled from 'styled-components'
import { CgAdidas,CgBmw } from "react-icons/cg";
import { VscAzure,VscOctoface } from "react-icons/vsc";
import { TbBrandVk } from "react-icons/tb";

const Trusted = () => {
  return (
    <Wrapper className='brand-section'>
        <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          <div className="services-1">
            <div>
            <CgAdidas className='icon' />
            </div>
          </div>
          <div className="services-1">
            <div>
            <CgBmw className='icon' />
            </div>
          </div>
          <div className="services-1">
            <div>
            <VscAzure className='icon' />
            </div>
          </div>
          <div className="services-1">
            <div>
            <VscOctoface className='icon' />
            </div>
          </div>
          <div className="services-1">
            <div>
            <TbBrandVk className='icon' />
            </div>
          </div>
          
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
padding: 6rem 0 0 0;
background-color: ${({ theme }) => theme.colors.bg};
.brand-section {
  padding: 12rem 0 0 0;
}
.services-1{
  width: auto;
  height: 20rem;
  justify-content: center;
  align-content: center;
  background: ${({ theme }) => theme.colors.bg};
  text-align: center;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
h3 {
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  font-weight: bold;
}
.icon {
  /* font-size: rem; */
  width: 8rem;
  height: 8rem;
 padding: 1rem;
  border-radius: 50%;
  background-color: #fff;
  color: #00008B;
  align-item:center
  box-sizing: border-box;
}
img {
  min-width: 10rem;
  height: 10rem;
}
.brand-section-slider {
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .brand-section-slider {
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* background-color: red; */
    text-align: center;
  }
}
   
`

export default Trusted