import React from 'react'
import "./sidebar.css"

function Sidebar() {
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

                    <li className="sidebarListItem">DOGS</li>
                    <li className="sidebarListItem">CATS</li>
                    <li className="sidebarListItem">FISHES</li>
                    <li className="sidebarListItem">RABBITS</li>
                    <li className="sidebarListItem">OTHERS</li>




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