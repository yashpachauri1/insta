const express = require('express');
const multer = require('multer');
const {postHandler, getHandler, deleteHandler, getAllHandler} = require('../controler/dataControler')
const checkAuthMiddleware = require('../util/Auth');

const route = express.Router();

route.use(checkAuthMiddleware);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb){
        const unique = Date.now()+ '-' +file.originalname;
        cb(null, unique);
    }
});
const upload = multer({storage:storage});



route.get('/',getHandler);

route.post('/', upload.single('image'),  postHandler);

route.delete('/:id', deleteHandler);

route.get('/all',getAllHandler);

module.exports= route;