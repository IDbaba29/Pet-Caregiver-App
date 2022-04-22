import React from 'react'
import "./caregiv.css";
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from "../../components/header/Header"

function Caregiv() {
  return (
    
        <>
        <Header />
        <div className='caregivPosts'>
            <Posts />
            <Sidebar />
       
        </div>
      </>
    
  )
}

export default Caregiv;