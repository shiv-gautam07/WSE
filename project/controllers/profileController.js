const User = require("../models/userModel");
const Profile = require("../models/profileModel");

const getProfile = async (res,req) =>{
    const data = await Profile.find({});
    return res.status(200).json({
        message: "Profile fetched successfully",
        data
    })
}

const createProfile = async(req,res)=>{
    const {imageUrl, summary, skills, workExperience, linkedinUrl, githubUrl, codingPlatforms, resumeUrl} = req.body;
    if(!imageUrl || !summary || !skills || !workExperience || !linkedinUrl || !githubUrl || !codingPlatforms || !resumeUrl){
        return res.status(400).json({message: "Please fill all the fields"});
    }

    const newProfile = await Profile.create({
        imageUrl,
        summary,
        skills,
        workExperience,
        linkedinUrl,
        githubUrl,
        codingPlatforms,
        resumeUrl
    })


    const data = await newProfile.save();

    if(data){
        return res.status(201).json({
            message: "Profile created successfully",
            data
        });
    }
    else{
        return res.status(500).json({
            message: "Error creating profile"
        });
    }
}

module.exports = {
    getProfile,
    createProfile
};
