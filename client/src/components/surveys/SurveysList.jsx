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
                // <div key={_id} className="row">
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
                // </div>
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