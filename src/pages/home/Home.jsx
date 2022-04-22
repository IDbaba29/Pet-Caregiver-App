import React from 'react'
import { Link } from 'react-router-dom';

import "./home.css"

function Home() {
  return (
    <div className='hero-image'>

      <div className='hero-text'>
        <h1 style={{ fontSize: "50px" }}>Welcome to Pat-A-Care</h1>
        <h3>Connect with pet caregivers while you are away.
          Let someone worry about your pet when you are away.
        </h3>
        <h4>Get the best care for your Pet</h4>
        <button className='buttons'><Link className="link" to="/login">Log In</Link></button>
        <button className='buttons'><Link className="link" to="/register">REGISTER</Link></button>
      </div>
    </div>
  )
}

export default Home;