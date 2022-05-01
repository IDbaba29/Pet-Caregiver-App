import  './singcaregiv.css';
import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar"
import Singlecargivpost from '../../components/singlePost/Singlepost';

function Singcaregiv() {
  return (
    <div className='single'>
      <Singlecargivpost />
      <Sidebar />
    </div>
  )
}

export default Singcaregiv;