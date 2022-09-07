const patientModel = require('../Models/patient')
const hospitalModel = require('../Models/hospital')
const psychiatristsModel = require('../Models/psychiatrists')


    exports.createPatient =  async (req,res,next) => {
        try{
            const patientData = new patientModel({
                Name: req.body.Name,
                Address : req.body.Address,
                Email: req.body.Email,
                PhoneNo: req.body.PhoneNo,
                Password : req.body.Password,
                Photo : req.file
            })
            console.log(patientData)
            const data = await patientData.save();
            res.send('data save successfully')
        }catch(err){
            res.send(err)
            console.log(err)
        }
    }

    exports.createHospital =  async (req,res,next) => {
        try{
            const hospitalData = new hospitalModel({
                ID : req.body.ID,
                Name: req.body.Name,
            })
            console.log(hospitalData)
            const data = await hospitalData.save();
            res.send('data save successfully')
        }catch(err){
            res.send(err)
            console.log(err)
        }
    }

    exports.createPsychiatrists=  async (req,res,next) => {
        try{
            const psychiatristsData = new psychiatristsModel({
                HospitalId:req.body.HospitalId,
                DoctorName : req.body.DoctorName,
                Patients : []
            })
            console.log(psychiatristsData)
            const data = await psychiatristsData.save();
            res.send(data)
        }catch(err){
            console.log(err)
            res.send(err)
        }
    }

    exports.gethospital = async (req,res,next) => {
             await hospitalModel.find({}).then(result => res.send(result)).catch(err => console.log(err));
    }

    exports.getpatient = async (req,res,next) => {
        await patientModel.find({}).then(result => res.send(result)).catch(err => console.log(err));
    }

    exports.getpsychiatrists= async (req,res,next) => {
        //await psychiatristsModel.aggregate([{$count : "Total Psychiatrist count" }])
        const data = await psychiatristsModel.find({}).count();
        console.log(data)
        await psychiatristsModel.find({}).populate('Patients').then(result => res.send(result)).catch(err => console.log(err));
    }

    exports.putpsychiatrists = async (req,res,next) => {
        psychiatristsModel.findOneAndUpdate({_id:req.params.id},{$push:{Patients :req.body.id}},
                
            {new : true} ,(err,doc) => {
                if(err) throw(err);
                else 
                    res.json(doc);        
            })
    }

    exports.getresult= async (req,res,next) => {

        const id = req.params.id;
       const data = await psychiatristsModel.find({HospitalId : id}).count();
        console.log(data)
       //res.send(data)
       // await psychiatristsModel.find({HospitalName : name}).populate('Patients').then(result => res.send(result)).catch(err => console.log(err));
  /*  psychiatristsModel.aggregate([
            {
              $match: { HospitalId : id} ,
            },
            {
                $count : "Total  Psychiatrists Count "
            },{
                $project:{HospitalId : 1 ,HospitalName:1}
            }
         ]).then(result => res.send(result)).catch(err => console.log(err));
        // await psychiatristsModel.find({HospitalId : id}).populate('Patients').then(result => res.send(result)).catch(err => console.log(err));
      */
        }
