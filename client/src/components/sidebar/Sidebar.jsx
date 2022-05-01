import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        };
        getCats()
    }, [])
    return (
        <div className='sidebar'>

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img
                    className='sb-img'
                    src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita soluta officiis qui.
                </p>
            </div>

            <div className="sidebarItem">

                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => ( 
                        <Link to={`/caregivpage/?cat=${c.name}`} className="link" >
                            <li key = {cats.id} className="sidebarListItem" >{c.name}</li>
                        </Link>

                    ))}







                </ul>

            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocials">
                    <i className="sidebarIcons fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcons fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcons fa-brands fa-pinterest-square"></i>
                    <i className="sidebarIcons fa-brands fa-instagram-square"></i>
                </div>

            </div>

        </div>

    )
}

export default Sidebar;