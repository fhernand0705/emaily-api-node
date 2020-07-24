import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <React.Fragment>
            <div><h3>Dashboard</h3></div>
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>    
        </React.Fragment>
    )
}

export default Dashboard;