var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var mailAccountUser = "sstechapp";
var mailAccountPassword = "9666717889";

var fromEmailAddress = "sstechapp@gmail.com";
var toEmailAddress = "sessionStorage.getItem('email')";

var transport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: mailAccountUser,
        pass: mailAccountPassword
    }
}))

var mail = {
    from: fromEmailAddress,
    to: toEmailAddress,
    subject: "hello world!",
    text: "Hello!",
    html: "<b>Hello!</b><p><a href=\"http://www.yahoo.com\">Click Here</a></p>"
}

function transver(abc,content)
{
    mail.to= abc;

    transport.sendMail(mail, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + content);
        }
        transport.close();
    });
};