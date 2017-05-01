var mongoose = require('mongoose');


var commentsSchema = new mongoose.Schema({
    UserName :{type:String, required:true},
    Questions:{type:String, required:true}
});

mongoose.model('CommentsInfo',commentsSchema,'comments');