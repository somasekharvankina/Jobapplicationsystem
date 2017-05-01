var mongoose = require('mongoose');
var postrs = mongoose.model('JobPoster');
require('../controllers/posters');
require('../models/dbs');
require('../models/posterdb');

var sendJsonResponse = function (res,status,content) {
    res.status(status);
    res.json(content);
};

module.exports.postersCreate = function (req,res) {
    postrs.create({
        CompanyName: req.body.CompanyName,
        JobID: req.body.JobID,
        Title: req.body.Title,
        LastDate: req.body.LastDate,
        Jobtype: req.body.Jobtype,
        SponsorShip: req.body.SponsorShip,
            City: req.body.City,
            Country: req.body.Country,
            Education: req.body.Education,
            Major: req.body.Major,
            MinimumGPA: req.body.MinimumGPA,
            Graduated: req.body.Graduated,
        Duties: req.body.Duties,
        RequiredQualification: req.body.RequiredQualification,
        AddedQualification: req.body.AddedQualification,
        Experienceneeded: req.body.Experienceneeded,
        Skills: req.body.Skills,

            PosterFirstName: req.body.PosterFirstName,
            PosterLastName: req.body.PosterLastName,
            Role: req.body.Role,
            Mobile: req.body.Mobile,
            Mail: req.body.Mail

    },function (err,data) {
        if(err){
            sendJsonResponse(res,400,{"message":"Error Saving Data"});

        }
        else{
            sendJsonResponse(res,201,{"message":"Data Saved Successfully"});
            console.log("data saved");
        }
    });

};

module.exports.postersdata = function (req,res) {
    sendJsonResponse(res,200,{"status":"success"});
};

module.exports.postersRead = function (req,res) {

    if(req.params && req.params.bytitle) {

        if (req.params.bytitle =='search') {
            postrs
                .find()
                .exec(function (err, data) {
                    if(!data || err){
                        sendJsonResponse(res,404,{"message":"Fooled"});
                    }
                    else
                res.render('posterhome',{title:data});
                })
        }

        else {

            postrs
                .find({"Title": req.params.bytitle})
                .exec(function (err, data) {

                    if (!data) {
                        sendJsonResponse(res, 404, {
                            "message": "Poster Id not found"
                        });
                        return;
                    } else if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }

                    res.render('posterhome', {title:data

                    });

                    // sendJsonResponse(res, 200, data);
                });
        }
    }else {
        sendJsonResponse(res, 404, {
            "message": "No Poster Id in request"
        });
    }
};

module.exports.serachdata = function (req,res) {
};


module.exports.postersDetails = function (req,res) {

    if(req.params && req.params.bytitle && req.params.byid){

       postrs
           .findById(req.params.byid)
           .exec(function (err,data) {
               if(!data){
                   sendJsonResponse(res,404,{"message":"Id not found"});
                   return;
               }
               else if(err) {
                   sendJsonResponse(res, 404, {"message": "Error"});
                   return;
               }

                   res.render('jobdetails',{title:data});
           });
    }
    else{
        sendJsonResponse(res,404,{"message":"Not poster Id in request"});
    }

};

module.exports.posterquestions = function (req,res) {
    if(req.params && req.params.bytitle && req.params.Byid && req.params.Hello){

    }
}

module.exports.posterquestions= function (req,res) {

    if(params.req && params.req.bytitle && params.req.byid && params.req.Hello){
        postrs
            .find()
            .exec(function (err,data) {
                if(!data){
                    sendJsonResponse(res,404,{"message":"No data found"});
                }
                else if (err){
                    sendJsonResponse(res,404,err);
                    return;
                }
                sendJsonResponse(res,200,{title:data});
            });
    }
    else{
        sendJsonResponse(res,404,{"message":"Not a valid search"});
    }
};