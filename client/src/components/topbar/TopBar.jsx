import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css";
import { Link } from 'react-router-dom';
import React from 'react'

function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
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
          <li className='top-center-list-item' onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="top-right">

        {user ? (
          <Link to="/settings">
            <img
              className='topImg'
              src={PF + user.profilePic}
              alt=""
            />
          </Link>
        ) : (
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