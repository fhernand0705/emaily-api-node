const sendGrid = require('sendGrid');
const helper = sendGrid.mail; 
const keys = require('../config/keys');

class Mailer extends helper.mail {
    constructor({ subject, recipients }, content) {
        super(); 
        
        this.from_email = new helper.Email('fhernand0705@gmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients); 
    }
}

module.exports = Mailer; 