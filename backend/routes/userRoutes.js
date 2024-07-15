const express = require('express');
const {loginHandler, singupHandler, getHandler, patchHandler} = require('../controler/userControler')
const multer = require('multer');
const userRoute = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './profile')
    },
    
    filename:function (req, file, cb){
        const unique = Date.now() +'-'+ file.originalname;
        cb(null, unique)
    }

})

const upload = multer({storage:storage});

// userRoute.postHandler('/', postHandler);

// userRoute.deleteHandler('/:id', deleteHandler)

userRoute.post('/login', loginHandler);
userRoute.post('/signup', singupHandler);
userRoute.get('/:id', getHandler);
userRoute.patch('/:id', upload.single('profile'), patchHandler);
module.exports = userRoute;