import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' },
];

function SurveyForm(props) {
    const { handleSubmit } = props; 

    const renderFields = () => {
        return FIELDS.map(({label, name}) => {
            return (
                <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
            ) 
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(values => console.log(values))}>
                {renderFields()}

                <Link to="/surveys" className="btn waves-effect waves-light left red">Cancel</Link>
                
                <button type="submit" className="btn waves-effect waves-light right">Next
                <i class="material-icons right">done</i>
                </button>
            </form>
        </div>
    )
}

function validate(values) {
    const errors = {};

    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `A value is required`
        }
    });

    return errors; 
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);