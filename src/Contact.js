import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
   <Wrapper>
      
          <h2 className='common-heading'>Contact Details</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.625289551849!2d77.69420811464543!3d12.995801690840018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110b04a3be4b%3A0xcffb252dab2e9643!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1677086901708!5m2!1sen!2sin" 
           width="100%" title="myFrame"
           height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          <div className='container'>
            
              <form className='contact-form' method="POST" action="https://formspree.io/f/xrgvqjkg">
              <div className='contact-inputs'>
                <input type="text" placeholder="Enter your name" name="username" autoComplete='off' required />
                <input type="email" placeholder="Enter your email" name="email" autoComplete='off' required />
                <textarea type="text" placeholder='enter your message' name="message" autoComplete='off' cols="30"
              rows="10" required />
              <input type="submit" value="send" />
                </div>
              </form>
          

          </div>
     
    </Wrapper>
  )
}

const Wrapper=styled.section`
padding: 9rem 0 5rem 0;
text-align: center;
.container {
  margin-top: 6rem;
  .contact-form {
    max-width: 50rem;
    margin: auto;
    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;
export default Contact