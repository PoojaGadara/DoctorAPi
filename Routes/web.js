//const patientModel = require('../Models/patient')
const mainController = require('../Controllers/mainController')
const {upload} = require('../utils/multer')
const express = require('express')
const routes = express.Router()

routes.post('/createpatient',upload.single('Photo'),mainController.createPatient)
routes.post('/createhospital',mainController.createHospital)
routes.post('/createPsychiatrists',mainController.createPsychiatrists)
routes.get('/gethospital',mainController.gethospital)
routes.get('/getpatient',mainController.getpatient)
routes.get('/getpsychiatrists',mainController.getpsychiatrists)
routes.put('/updatepsychiatrists/:id',mainController.putpsychiatrists)
routes.get('/getresult/:id',mainController.getresult)

module.exports = routes