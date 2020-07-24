import React from 'react'

function SurveyField({ input, label }) {    
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
        </div>
    );
}

export default SurveyField;