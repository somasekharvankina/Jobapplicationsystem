var mongoose = require('mongoose');
var appcnt = mongoose.model('Applicants');
require('../controllers/applicants');
require('../models/dbs');
require('../models/applicantsdb');
require('./stmp');



var sendJsonResponse = function (res,status,content) {
    res.status(status);
    res.json(content);
};

module.exports.applicantsCreate = function (req,res) {

    appcnt.create({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        DateOfBirth: req.body.DateOfBirth,
        emailid: req.body.emailid,
        Address: [{
            Street: req.body.Street,
            City: req.body.City,
            Country: req.body.Country
        }],
        Education: [{
            School: req.body.School,
            Major: req.body.Major,
            Location: req.body.Location,
            GPA: req.body.GPA,
            Graduated: req.body.Graduated
        }],
        RolesInterested: req.body.RolesInterested,
        Expereince: [{
            CompanyName: req.body.CompanyName,
            Role: req.body.Role,
            Duration: [{
                From: req.body.From,
                To: req.body.To
            }],
            Description: req.body.Description
        }],

        Skills: req.body.Skills,
        SponsorShip: req.body.SponsorShip
    }, function (err,data) {
        if(err){
            sendJsonResponse(res,400,err);
        }
        else{
            sendJsonResponse(res,201,data);
            console.log("data saved");
        }

});
    };

module.exports.applicantdata = function (req,res) {
    renderHomepage(req,res);
};

module.exports.applicationsRead = function (req,res) {

    if (req.params && req.params.applicantid && req.params.posterid) {
        appcnt
            .find({"emailid":req.params.applicantid},{_id:0})
            .select('FirstName Education Skills RolesInteredted Expereince Description Sponsorship ')
            .exec(function (err, data) {

                if (!data) {
                    sendJsonResponse(res, 404, {
                        "message": "Applicant Id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                   transver(res,req.params.posterid,req.params.applicantid, data);
                    //sendJsonResponse(res,200,data);

            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No email Id in request"
        });
    }
};

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
}));


function transver(res,tmail, fmail ,content)
{

    var mailt = fmail + "/" +tmail;

    var mail = {
    from: fromEmailAddress,
    to: fmail,
    subject: "hello world!",
    text: content.toString(),
    html: " http://localhost:3000/api/applicant/" + mailt
};


    transport.sendMail(mail, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + content);
        }
        transport.close();
    });
   sendJsonResponse(res,200,{"message":"Applied"});
};