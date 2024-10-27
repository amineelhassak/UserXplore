"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../styles1.css";
import "../styles2.css";
import Dashboard from '../dashboard/dashboard';
import Userlist from '../users/page';
{/* <Userlist />
            <Dashboard/> */}


function Sidebar()
{
    const [filterString, setFilterString] = useState('');
    const router = useRouter();

    const ListUsers = () => {
        router.push("/admin/users");
    };
    const dashboard = () => {
        router.push("/admin/dashboard");
    };
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    {/* Uncomment to add an icon */}
                    {/* <FontAwesomeIcon icon={faFaceLaughWink} size="2x" /> */}
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* Divider */}
            <hr className="sidebar-divider my-0" />

            {/* Nav Item - Dashboard */}
            <li className="nav-item active" onClick={dashboard}>
                <div>Dashboard</div>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider my-0" />

            {/* Nav Item - Users */}
            <li className="nav-item active" onClick={ListUsers}>
                <span>Users</span>
            </li>
        </ul>
    );
}

export default Sidebar;
