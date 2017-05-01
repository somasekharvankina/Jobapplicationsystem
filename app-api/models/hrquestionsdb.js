var mongoose = require('mongoose');

var HRSchema = new mongoose.Schema({

    Question:{type:String,required:true}
});
mongoose.model("HRQuestions",HRSchema,"other");