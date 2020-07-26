import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

function SurveyNew() {
    const [showReview, setShowReview] = useState(false); 

    return (
        <div>
            <SurveyForm />
            <SurveyFormReview />
        </div>
    )
}

export default SurveyNew;