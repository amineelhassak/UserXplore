import React from 'react';
import Card from '../(Cart)/Cart';
import "../styles.css"
function Dashboard() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    Generate Report
                </a>
            </div>
            <div className="row">
                <Card title="Earnings (Monthly)" value="$40,000" color="primary" />
                <Card title="Earnings (Annual)" value="$215,000" color="success" />
                <Card title="Tasks" value="50%" color="info" />
                <Card title="Pending Requests" value="18" color="warning" />
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-5">
                    {/* Doughnut chart configuration goes here if uncommented */}
                </div>
                <div className="col-xl-8 col-lg-7">
                    {/* Line chart configuration goes here if uncommented */}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
