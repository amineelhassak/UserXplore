"use client";
import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom'
import Sidebar from '../(sidebar)/sidebar'
import Topbar from '../(topbar)/topbar'
import Userlist from './users'
// import "./styles.css"

function Portal() {
  const [filterString, setFilterString] = useState('');
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar filterString={filterString} setFilterString={setFilterString} />
            <div className='container-fluid'>
            {/* <Userlist /> */}
            <Userlist filterString={filterString}/>
              {/* <Outlet></Outlet> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portal

