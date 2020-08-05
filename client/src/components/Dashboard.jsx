import React from 'react';
import { Link } from 'react-router-dom';
import SurveysList from './surveys/SurveysList';

function Dashboard() {
    return (
        <React.Fragment>
            <SurveysList />
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large">
                    <i className="material-icons">add</i>
                </Link>
            </div>    
        </React.Fragment>
    )
}

export default Dashboard;