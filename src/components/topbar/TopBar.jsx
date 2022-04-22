import "./topbar.css";
import { Link } from 'react-router-dom';
import React from 'react'

function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>

      <div className="top-center">
        <ul className='top-center-list'>
          <li className='top-center-list-item'><Link className='link' to="/" >HOME</Link></li>
          <li className='top-center-list-item'><Link className='link' to="/about" >ABOUT</Link></li>
          <li className='top-center-list-item'><Link className='link' to="/caregivpage" >GET-A-CARER</Link></li>
          <li className='top-center-list-item'><Link className='link' to="/write" >CREATE-PET-AD</Link></li>
          <li className='top-center-list-item'>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="top-right">

        {user ? (
             <a href="/settings">
             <img
               className='topImg'
               src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
               alt=""
             />
             </a>
        ): (
          <ul className='top-center-list'>
                <li className='top-center-list-item'>
                  <Link className='link' to="/login" >LOGIN</Link>
                </li>

                <li className='top-center-list-item'>
                  <Link className='link' to="/register" >REGISTER</Link>
                </li>
        </ul>
        )
        
      }

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>

  )
}

export default TopBar;