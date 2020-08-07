import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchSurveys, deleteSurvey } from '../../actions';

function SurveysList() {
    const {surveys, auth: currentUser} = useSelector(({ surveys, auth}) => ({surveys, auth}));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSurveys())
    },[]);

    const renderFirstName = () => {
        if (currentUser) {
            let splitName = currentUser.name.split('');
            let fname = '';
            let i = 0; 

            while (splitName[i] !== ' ') {
                fname += splitName[i];
                i++;
            }

            return fname;
        } 
    }

    const renderSurveys = () => {
        return surveys.map(({ title, subject, yes, no, dateSent, _id }) => {
            return (
                <div key={_id} className="col m6">
                    <div className="card">
                        <div className="card-content white-text">
                            <span className="card-title">{title}</span>
                            <p>{subject}</p>
                        </div>
                        <div className="card-action">
                            <span className="yes-no-res white-text">Yes: {yes} No: {no}</span>
                            <span className="date-text">
                                Sent On: {new Date(dateSent).toLocaleDateString()}
                            </span> 
                            <a href=""
                                onClick={() => dispatch(deleteSurvey(_id))}   className="delete-icon">
                                <i className="material-icons">delete_forever</i>
                            </a>
                        </div>
                    </div>
                </div>
            ) 
        })
    }

    return (
        <div>
            {currentUser && 
                <h3 className="white-text center">
                    {`${renderFirstName()}'s Surveys`}
                </h3>
            }
            {renderSurveys()}
        </div>
    )
}

export default withRouter(SurveysList);