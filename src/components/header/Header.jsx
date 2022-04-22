import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">

            <span className='headerTitleSm'>Find Caregivers here!!! </span>
            <span className='headerTitleLg'>Warm welcome!!!</span>

        </div>

        <img 
        className='headerImg'
        src="https://images.pexels.com/photos/1981111/pexels-photo-1981111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
         alt="" />
    </div>
  )
}

export default Header;