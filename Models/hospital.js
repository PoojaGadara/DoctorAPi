const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema({

    ID:{
        type:Number,
        required:[true,'Enter Hospital ID']
    },
    Name:{
        type: String,
        required:[true,'Enter Hospital Name']
    }
})

const hospitalModel = mongoose.model('hospital' ,hospitalSchema )

module.exports= hospitalModel;