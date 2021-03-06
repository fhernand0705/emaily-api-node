import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import formFields from './formFields'; 
import * as actions from '../../actions/index';

function SurveyFormReview({ onCancel, history }) {
    const formValues = useSelector(state => state.form.surveyForm.values);
    const dispatch = useDispatch(); 

    const renderFormData = () => {
        return formFields.map(({ label, name }) => {
         return (
            <div key={name}>
                <label>{label}</label>
                <div className="white-text">{formValues[name]}</div>
            </div>
         )   
      })
    }
    
    return (
        <div>
            <h4 className="white-text survey-header">Review Survey</h4>
            {renderFormData()}
            <button onClick={onCancel} className="red white-text darken-3 btn-flat" >
                Back
            </button>
            <button 
                onClick={() => dispatch(actions.submitSurvey(formValues, history))}
                className="green white-text btn-flat right">
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

export default withRouter(SurveyFormReview); 