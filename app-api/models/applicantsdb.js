var mongoose = require('mongoose');

var applicantSchema = new mongoose.Schema({
        FirstName:{type:String, required:true},
        LastName: String,
        DateOfBirth:{type: Date, required:true},
        emailid: String,
        Address:[{
            Street:{type:String, required:true},
            City:{type:String, required:true},
            Country:{type:String, required:true}
        }],
        Education:[{
            School :{type: String, required:true},
            Major:{type:String, required:true},
            Location:String,
            GPA: Number,
            Graduated :{type: String, required:true}
        }],
        RolesInterested :{type:[String], required:true},
        Expereince:[{
            CompanyName:String,
            Role:String,
            Duration:[{
                From: Date,
                To: Date
            }],
            Description:String
        }],
        Skills:{type:[String], required:true},
        SponsorShip:{type:Boolean, required:true}

});


mongoose.model('Applicants',applicantSchema,'applicant');
