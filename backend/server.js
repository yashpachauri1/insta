const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const route = require('./routes/dataRoutes')
const userRoute = require('./routes/userRoutes');
dotenv.config();
const app = express();
app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from this origin only
  }));
app.use(express.json());

app.use('/uploads', express.static('uploads'));
app.use('/profile', express.static('profile'));

mongoose.connect(process.env.URI)
.then(()=>{
   app.listen(process.env.PORT, (error)=>{
    if(error){
        console.log(error.message)
    }
    else{
        console.log(`server is running on port ${process.env.PORT} `)
    }
   })
});
app.use('/user',userRoute);
app.use(route);


