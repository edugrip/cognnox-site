const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '1c34ab86cb593118b52721d82cad43d3-6ae2ecad-563bd221',
        domain: 'sandbox38212d7bd4f1460ab739d486b6c8a1eb.mailgun.org'
    }
};
const transporter = nodemailer.createTransport(mailGun(auth));
// const sendMail = (name, email, msg_subject, phone_number, message) => {
const sendMail = (output, subject) => {
        //         const output = `
        //  <p> You have a new contact request</p>  
        //  <h3>----Contact Detail---</h3>
        //  <ul>
        //      <li>Name: ${name} </li>
        //      <li>Email:${email} </li>
        //      <li>Phone NO:${phone_number}</li>  
        //     <li> Subject: ${msg_subject} </li>
        //     <li>  Message: ${message }</li>
        //  </ul>`;
        //console.log('Output is------>' + output);
        const mailOptions = {
            from: ' me@samples.mailgun.org',
            to: 'info@cognnox.com',
            subject: subject,
            html: output
        };
        transporter.sendMail(mailOptions, function(err, data) {
            console.log('Connected mail');
            if (err) {
                throw err;
            } else {
                console.log('Sent mail');
            }
        });
    }
    // Exporting the sendmail
module.exports = sendMail;