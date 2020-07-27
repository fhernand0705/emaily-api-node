import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

function SurveyNew() {
    const [showFormReview, setShowFormReview] = useState(false);

    return (
        <div>
            {!showFormReview ? <SurveyForm 
            onSurveySubmit={() => setShowFormReview(true)}/> 
            : <SurveyFormReview />}
        </div>
    )
}

export default SurveyNew;