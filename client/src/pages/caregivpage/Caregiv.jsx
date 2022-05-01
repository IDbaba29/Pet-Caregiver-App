import React from 'react';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import "./caregiv.css";
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from "../../components/header/Header"
import axios from "axios";

function Caregiv() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();



  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])
  return (

    <>
      <Header />
      <div className='caregivPosts'>
        <Posts posts={posts} />
        <Sidebar />

      </div>
    </>

  )
}

export default Caregiv;