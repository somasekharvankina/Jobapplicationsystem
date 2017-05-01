module.exports.posterinfo = function(req,res){
    res.render('index',{title:'Poster'});
};


module.exports.jobdata = function (req,res) {
    res.render('jobdescription',{title:'JobData'});
};