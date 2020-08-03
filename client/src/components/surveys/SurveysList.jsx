import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchSurveys } from '../../actions';

function SurveysList() {
    const surveys = useSelector(({ surveys }) => surveys);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSurveys())
    },[]);

    const renderSurveys = () => {
        return surveys.map(({title, subject, yes, no, dateSent }) => {
            return (
                <div class="row">
                    <div class="col m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">{title}</span>
                                <p>{subject}</p>
                            </div>
                            <div class="card-action">
                                <span>Yes: {yes}</span>
                                <span>No: {no}</span>
                                <p className="right">
                                    Sent on: 
                                    {new Date(dateSent).toLocaleDateString()}
                                </p> 
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

export default SurveysList;