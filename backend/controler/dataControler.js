const instagram = require('../models/dataMode');
const userModel = require('../models/User');
const postHandler = async (req, res, next) => {
   const user_id = req.user._id;
   
    const { caption } = req.body;
    const fileName = req.file;
    const image = fileName.filename;
    console.log('userId', user_id);
    const user = await userModel.findOne({_id:user_id})
    console.log(user.profilePhoto)
    const  profilePhoto = user.profilePhoto;
    try {
        const response = await instagram.create({ image, caption, user_id, profilePhoto});
        res.status(200).json(response);
      
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
        next();
    }
};

const getHandler = async (req, res, next) => {
   const user_id = req.user._id;
   console.log('userId', user_id);
    try {
        const response = await instagram.find({user_id});
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
        next();
    }
};

const deleteHandler = async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    try {
        const response = await instagram.findByIdAndDelete(id);
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
        next();
    }
};

//for all user

const getAllHandler = async (req, res, next) => {

     try {
         const response = await instagram.find();
         res.status(200).json(response);
     } catch (error) {
         console.log(error.message);
         res.status(500).json({ error: error.message });
         next();
     }
 };
 

module.exports = { postHandler, getHandler, deleteHandler, getAllHandler };
