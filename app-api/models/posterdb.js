var mongoose = require('mongoose');

var posterSchema = new mongoose.Schema({
    CompanyName:{type:String, required:true},
    JobID: {type:String, required:true},
    Title :{type:String, required:true},
    PostedOn:{type:Date, "default":Date.now},
    LastDate:{type: Date, required:true},
    Jobtype:{type:String, required:true},
    SponsorShip:{type:String, required:true},
    City:{type:String, required:true},
    Country:{type:String, required:true},
        Education :{type: String, required:true},
        Major:{type:String, required:true},
        MinimumGPA: Number,
        Graduated :{type: String},
    Duties:{type:[String], required:true},
    RequiredQualification:{type:[String], required:true},
    AddedQualification:{type:String, required:true},
    Experienceneeded:{type:String, required:true},
    Skills:{type:[String], required:true},
        PosterFirstName:{type:String, required:true},
        PosterLastName:String,
        Role:{type:String, required:true},
        Mobile:Number,
        Mail:String
});



mongoose.model('JobPoster',posterSchema,'poster');

