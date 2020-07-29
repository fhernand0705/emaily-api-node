import React from 'react'

function SurveyField({ input, label, meta: { error, touched } }) {    
    return (
        <div className="input-field">
            <label className="active">{label}</label>
            <input {...input} style={{ marginBottom: '5px' }}/>
            <div className="red-text" style={{ marginBottom: '20px' }}>
                { touched && error }
            </div>
        </div> 
    );
}

export default SurveyField;