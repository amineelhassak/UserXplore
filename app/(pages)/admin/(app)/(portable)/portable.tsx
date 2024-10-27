import React from 'react'
// import { Outlet } from 'react-router-dom'
import Sidebar from '../(sidebar)/sidebar'
import Topbar from '../(topbar)/topbar'
import Userlist from '../users/page'
import Dashboard from '../dashboard/dashboard'
// import "../stayles.css"

function Portal() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className='container-fluid'>
            {/* <Userlist /> */}
            {/* <Dashboard/> */}
              {/* <Outlet></Outlet> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portal

