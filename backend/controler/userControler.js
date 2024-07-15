const { default: mongoose } = require('mongoose');
const userModel = require('../models/User');
const jwt = require('jsonwebtoken');


const createToken = (_id) => {
    try {
       return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1D' });
    } catch (error) {
       // Handle the error, e.g., log it or throw a custom error
       console.error('JWT signing error:', error);
       throw new Error('Failed to create token');
    }
 };


const loginHandler = async(req, res, next) =>{
    const {email, password} = req.body;
    try{
        const user = await userModel.login(email, password);
        
        const token = createToken(user._id);
      
        res.status(200).json({user, token})
    }catch(error){
        res.status(400).json({error:error.message})
        next();
    }
}

const singupHandler =async (req, res, next)=>{
    const {email, name, username, password} = req.body;

    try{
        const addUser = await userModel.signup(email, name, username, password,);

        const token = createToken(addUser._id);
        res.status(200).json({addUser, token})
    }
    catch(error){
        res.status(400).json({error:error.message})
        next();
    }
}


const getHandler = async(req, res, next)=>{
    const {id} = req.params;
 try{
     const singleUserData = await userModel.findById({_id:id});
     res.status(200).json(singleUserData);
 }
catch(error){
 console.log(error.message)
 res.status(500).json({error:error.message})
 next()
}
}

const patchHandler = async(req, res, next)=>{
  const {id} = req.params;
  const {email, phone, name, username, bio, gender} = req.body;
  const fileName = req.file;
  const profilePhoto = fileName.filename;
  console.log(profilePhoto);
  try{
    const patchData = await userModel.findByIdAndUpdate(id,{email, phone, name, username, bio, gender,profilePhoto}, {new:true})
    res.status(200).json(patchData);
  }
  catch(error){
    res.status(500).json({error:error.message});
  }
}


module.exports = {singupHandler, loginHandler, getHandler, patchHandler};