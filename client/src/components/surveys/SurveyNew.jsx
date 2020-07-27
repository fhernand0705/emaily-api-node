import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

function SurveyNew() {
    const [showFormReview, setShowFormReview] = useState(false);

    return (
        <div>
            {!showFormReview ? 
            <SurveyForm onSurveySubmit={() => setShowFormReview(true)}/> 
            : <SurveyFormReview onCancel={() => setShowFormReview(false)}/>}
        </div>
    )
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);