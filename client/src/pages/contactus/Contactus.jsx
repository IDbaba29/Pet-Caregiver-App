import React from 'react'
import "./contactus.css"

function Contactus() {
  return (
    <div className='contactus'>
       
        <form className='form'>
                <h1>Please send us your complaint</h1>

                <input className='form_input nameEmail input' type="text" placeholder='Enter your full name' /><br />
                <input className='form_input nameEmail input' type="text" placeholder='Enter your email address'/><br />
                <textarea className='form_input message input' ></textarea><br />
                <button className='btn'>Submit</button>
        </form>
       
        
    </div>
  )
}

export default Contactus;