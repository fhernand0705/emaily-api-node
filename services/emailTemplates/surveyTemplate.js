const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h2>We'd love to hear from you!</h2>
                    <p>
                    We truly value our customers feedback, so it'd be great if you 
                    answer the following question: 
                    </p>
                    <p>${ survey.body }</p>
                    <div>
                        <span style="margin: 0 1em;">
                            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                        </span>
                        <span><a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a></span>
                    </div>
                </div>
            </body>
        </html>
    `;
}