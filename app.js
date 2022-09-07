const express = require('express')
const app = express();
//const dotenv=require('dotenv');
const mongoose= require('mongoose');
const bodyParser = require('body-parser')
const path = require('path')
const route = require('./Routes/web')

//parser for req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',route)

app.use('/uploads', express.static('uploads'));

DATABASE = 'mongodb+srv://mongo:co1on3on58k87KBH@cluster0.3vetls5.mongodb.net/Company'
const connectDB = async () => {
try{
    await mongoose.connect(DATABASE);
    console.log('MongoDB connected')
    const Port = process.env.PORT || 8000;
    const sever=app.listen(Port,() => {
        console.log(`Server Lishen on port ${Port}....`)
    })    
}catch(error){
    console.log(error)
}
}

try{
    connectDB();
}catch(error){
    console.log('Failed to connect to mongo DB')
}