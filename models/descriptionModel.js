const mongoose  = require("mongoose");

const descriptionSchema = new mongoose.Schema({
    profile : {
         type: mongoose.Schema.Types.ObjectId,
         ref:'Profile',
         required: true
    },
    
    qualificationAndSkills:{
      type:  [String]
    },

    details : {
        location : {type:String},
        jobType : {type :String},
        salary : {type:String},
        workingDays: {type:String},
        experience: {type:String},
        workingDays: {type:String},
        numberOfOpenings: {type:Number},
    },

    responsibilities :{
        type:[String]
    },

   
   
})

const Description = mongoose.model('Description',descriptionSchema)
module.exports = Description;