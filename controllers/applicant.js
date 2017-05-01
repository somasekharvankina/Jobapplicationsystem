var request = require('request');

var apiOptions = {
    server:"http://localhost:3000/"
};


module.exports.applicantinfo = function(req,res){
    res.render('applicantsignup',{title:'Signup'});
};

module.exports.applicationsignup = function(req,res){
    res.render('applicantsignup',{title:'Signup'});
};
