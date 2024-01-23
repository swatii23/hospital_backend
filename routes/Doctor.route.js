const express = require('express');
const doctorRouter = express.Router();
const Doctor = require('../models/Doctor.model');
const { addDoctor, getAllDoctors, updateDoctor, deleteDoctor } = require('../controllers/Doctor.controller');

doctorRouter.post('/', addDoctor);

doctorRouter.get('/', getAllDoctors);

doctorRouter.put('/:id', updateDoctor);

doctorRouter.delete('/:id', deleteDoctor);

module.exports = doctorRouter;