import React from 'react';
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';

function SurveyForm(props) {
    const renderFields = () => {
        return (
            <div>
                <Field label="Survey Title" type="text" name="title" component={SurveyField}/>
                <Field label="Subject" type="text" name="subject" component={SurveyField}/>
                <Field label="Email Body" type="text" name="body" component={SurveyField}/>
                <Field label="Recipients List" type="text" name="recipients" component={SurveyField}/>
            </div>
        )
    }
    const { handleSubmit } = props; 
    return (
        <div>
            <form onSubmit={handleSubmit(values => console.log(values))}>
                {renderFields()}
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);