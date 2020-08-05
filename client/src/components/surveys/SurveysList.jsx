import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchSurveys, deleteSurvey } from '../../actions';

function SurveysList() {
    const surveys = useSelector(({ surveys }) => surveys)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSurveys())
    },[]);


    const renderSurveys = () => {
        return surveys.map(({ title, subject, yes, no, dateSent, _id }) => {
            return (
                <div key={_id} className="row">
                    <div className="col m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{title}</span>
                                <p>{subject}</p>
                            </div>
                            <div className="card-action">
                                <span>Yes: {yes}</span>
                                <span>No: {no}</span>
                                <p className="right">
                                    Sent on: 
                                    {new Date(dateSent).toLocaleDateString()}
                                </p> 
                                <button 
                                    onClick={() => dispatch(deleteSurvey(_id))} className="left">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) 
        })
    }

    return (
        <div>
            {renderSurveys()}
        </div>
    )
}

export default withRouter(SurveysList);