const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String,
        required:true, 
        unique:true
    },
    phone:{
        type:Number,
    },
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    bio:{
        type:String
    },
    gender:{
        type:String
    },
    profilePhoto:{
     type:String
    },
    password:{
        type:String,
        required:true
    }
}, {timestamps:true});


UserSchema.statics.signup = async function (email, name, username, password,){
    if(!email || !password || !username || !name){
        throw Error("all fields are required");
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error ('password is weak')
    }

    const exists = await this.findOne({email});

    if(exists) {
        throw Error ('Email is already in use')
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, name, username, password:hash})
    return user
}

UserSchema.statics.login = async function (email, password){
    if(!email || !password){
        throw Error("all fields are required");
    }
    const user = await this.findOne({email});

    if(!user){
        throw Error("Invalid user");
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error ('Invalid password');
    }
    return user;
}



const userModel = mongoose.model('userModel', UserSchema);

module.exports = userModel;
