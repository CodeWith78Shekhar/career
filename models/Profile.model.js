const mongoose = require("mongoose");


const profileSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    jobNarture: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }

})

const Profile = mongoose.model("Profile",profileSchema);
module.exports = Profile;