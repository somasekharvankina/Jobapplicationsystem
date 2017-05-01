var request = require('request');

var apiOptions = {
    server:"http://localhost:3000/"
};
var renderHomepage = function (req,res) {
    res.render('index',{title:"Job Application System"});
}

module.exports.index = function (req,res) {
    var requestOption,path;
    path = '/api/applicants';
    requestOption={
        url:apiOptions.server +path,
        method:"GET",
        json:{},
    };
    request(
        requestOption,
        function (err,response,body) {
            renderHomepage(req,res);
        }
    );
};

module.exports.loginn = function(req,res) {

    res.render('login',{title:"Hello"});
};