const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys/message', (req, res) => {
        res.send('Thanks for your feedback!');
    })

    app.post('/api/surveys/webhooks', (req, res) => {
        const pathExtractor = new Path('/api/surveys/:surveyId/:choice'); 
        
        const events = _.map(req.body, ({url, email}) => {
            const match = pathExtractor.test(new URL(url).pathname);
            
            if (match) {
                return { email, ...match }
            }
        }).filter(event => event !== 'undefined'); 

        const uniqueEvents = _.uniqBy(events, 'email', 'surveyId'); 
        console.log(uniqueEvents) 

        res.send({});
    })
    
    app.post('/api/surveys', requireLogin, requireCredits, async(req, res) => {
        const { title, subject, body, recipients } = req.body; 

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        // create instance of Mailer 
        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();  
            await survey.save();
        
            req.user.credits--;
            const user = await req.user.save(); 
        
            res.send(user);
        } catch (error) {
            res.status(422).send(err);
        }
    });
}

// http://e30c0f988fac.ngrok.io