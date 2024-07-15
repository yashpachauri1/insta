const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const instaSchema = new Schema({
    image:{
        type:String,
        required:true
    },
    caption:{
      type:String,
    },
    user_id:{
      type:String,
      required:true
    },
    profilePhoto:{
      type:String,
      required:true
    }
},{timestamps:true});

const instagram = mongoose.model('instagram', instaSchema);

module.exports = instagram;