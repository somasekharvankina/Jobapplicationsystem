var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');
require('../config/passport');


var sendJsonResponse = function (res,status,content) {
    res.status(status);
    res.json(content);
};

module.exports.register = function (req,res) {
    if(!req.body.username || !req.body.email || !req.body.password){
        sendJsonResponse(res,400,{"message":"all fields required"});
     return;
    }

    var user = new User();

    user.username = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user.save(function (err) {
        var token;
        if(err){
            sendJsonResponse(res,404,err);
        }
        else{
            token = user.generateJwt();
            sendJsonResponse(res,200,{"token":token});
        }

    });
};

module.exports.login = function (req,res) {

    if(!req.body.email  || !req.body.password) {
        sendJsonResponse(res, 400, {"message": "Enter username and password please"});
        return;
    }
        User
            .findOne({"email": req.body.email},function (err,user) {

            if (!user) {
                sendJsonResponse(res,404,{"message":"Not User"});
            }

           else if (err) {
                sendJsonResponse(res, 404, {"message": "Incorrect username"});
            }
            else if(user)
                {
                    if (!user.validPassword(req.body.password)) {
                        sendJsonResponse(res,404,{
                            message: 'Incorrect password'
                        });
                    }
                    else {
                        res.render('index',{title:user});
                        //sendJsonResponse(res, 201, {user: user});
                    }
        }
});
};
/* passport.authenticate('userr',function (err,user,info) {
      var token;

       if(err){
           sendJsonResponse(res,404,err);
           return;
       }
       if(user){
           token = user.generateJwt();
           sendJsonResponse(res,200,{"token":token});
        }
        else {
         sendJsonResponse(res,401,info);
        }
*/

