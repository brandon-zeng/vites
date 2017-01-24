var nodemailer = require('nodemailer');


var sendIt = function(subject, text, res) {
        let transporter = nodemailer.createTransport({
                                                            service: 'Gmail',
                                                            auth: {
                                                                user: 'viteorigin@gmail.com', // Your email id
                                                                pass: 'viterock#1' // Your password
                                                            }
                                                        });
        let mailOptions = {
                            from: 'viteorigin@gmail.com', // sender address
                            to: 'viteorigin@gmail.com', // list of receivers
                            subject: subject, // Subject line
                            text: text //, // plaintext body
                            // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
                            };

        transporter.sendMail(mailOptions, function(error, info){
                                                                    if(error){
                                                                        console.log(error);
                                                                        res.json({yo: 'error'});
                                                                    }else{
                                                                        console.log('Message sent: ' + info.response);
                                                                        res.json({yo: info.response});
                                                                    };
                                                                });
}

var sendMail = function(name, email, message, res) {
    let subject = 'user( ' + name + ' ) feedback';
    let text = 'name:\n' + name + ' \n\n\n' + 'email:\n' + email + ' \n\n\n' + 'message:\n' + message;

    sendIt(subject, text, res);

}

var subscribe = function(email, res) {
    let subject = 'new user subscription';
    let text = 'email:\n' + email;

    sendIt(subject, text, res);

}

module.exports = {
    sendMail: sendMail,
    subscribe: subscribe
}
