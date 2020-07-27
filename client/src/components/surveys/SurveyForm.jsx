import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' },
];

const SurveyForm = (props) => {

    const { handleSubmit, onSurveySubmit } = props; 

    const renderFields = () => {
        return FIELDS.map(({label, name}) => {
            return (
                <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
            ) 
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSurveySubmit)}>
                {renderFields()}

                <Link to="/surveys" className="btn waves-effect waves-light left red">Cancel</Link>
                
                <button type="submit" className="btn waves-effect waves-light right">
                    Next
                <i className="material-icons right">done</i>
                </button>
            </form>
        </div>
    )
}

function validate(values) {
    const errors = {};
    
    errors.emails = validateEmails(values.emails || '');

    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `A value is required`;
        }
    });


    return errors; 
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);