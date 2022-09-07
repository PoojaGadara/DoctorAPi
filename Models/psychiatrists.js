const mongoose = require('mongoose')
const validator = require('validator');


const psychiatristsSchema = new mongoose.Schema({

    HospitalId:{type:Number},
    HospitalName:{
        type: String
    },
    DoctorName:{
        type: String
    },
    Patients:
    [{ type: mongoose.Schema.Types.ObjectId, ref: 'patient' }]
})

const psychiatristsModel = mongoose.model('psychiatrists' ,psychiatristsSchema )

module.exports= psychiatristsModel;