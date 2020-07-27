import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import formFields from './formFields'; 
import * as actions from '../../actions/index';

function SurveyReview({ onCancel }) {
    const formValues = useSelector(state => state.form.surveyForm.values);
    const dispatch = useDispatch(); 

    const renderFormData = () => {
        return formFields.map(({ label, name }) => {
         return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
         )   
      })
    }
    
    return (
        <div>
            {renderFormData()}
            <button onClick={onCancel} className="yellow white-text darken-3 btn-flat" >
                Back
            </button>
            <button 
                onClick={() => dispatch(actions.submitSurvey(formValues))}
                className="green white-text btn-flat right">
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

export default SurveyReview; 