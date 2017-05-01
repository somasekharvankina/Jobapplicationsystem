var mongoose = require('mongoose');
var comm = mongoose.model('CommentsInfo');
require('../models/dbs');
require('../models/questiondb');

var sendJsonResponse = function (res,status,content) {
    res.status(status);
    res.json(content);
};

module.exports.questionsRead = function (req,res) {
    if(req.params && req.params.ques ){
            comm
                .find()
                .exec(function (err,data) {
                    if(!data){
                        sendJsonResponse(res,404,{"message":"No data found"});
                    }

                    else if(err){
                        sendJsonResponse(res,404,{"message":"Error"});
                    }

                    res.render('questioninfo',{title:data});

                });
    }
    else {
        sendJsonResponse(res, 404, {
            "message": "No comments in request"
        });
    }
};

module.exports.questionsCreate = function (req,res) {

    comm.create({
            UserName:req.body.UserName,
            Questions: req.body.Questions
        },
        function (err,data) {
            if(err){
                sendJsonResponse(res,400,{"message":err});
            }
            else{
                sendJsonResponse(res,201,{"Message":"Posted"});
                console.log("data saved");
            }
        });
};