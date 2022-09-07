const mongoose = require('mongoose')
const validator = require('validator');

const patientSchema = new mongoose.Schema({

    Name:{
        type: String,
        required:[true,'Enter Name']
    },
    Address:{
        type: String,
        required:[true,'Enter Address'],
        minlength :[10,'Enter minimum 10 characters']
    },
    Email:{
        type: String,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
          },
        required:[true,'Enter Email']
    },
    PhoneNo:{
        type: String,
        required:[true,'Enter Phone Number'],
        validate: {
            validator: function(v) {
              return /\d{2}-\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
          },
        trim : true
    },
    Password:{
        type: String,
        required:[true,'Enter Password'],
        validate:{
            validator: validator.isStrongPassword,
            message: 'Password is not valid'
          },
        },
    Photo:{
        data: Buffer,
        contentType: String
    }
})

const patientModel = mongoose.model('patient' , patientSchema)


module.exports=patientModel;