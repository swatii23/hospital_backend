const asyncHandler = require("express-async-handler");
const DoctorModel = require('../models/Doctor.model');

const addDoctor = asyncHandler(async (req, res) => {
  try {
    const {
      name,
      imageUrl,
      specialization,
      experience,
      location,
      date,
      slots,
      fee,
    } = req.body;

    await DoctorModel.create({
      name,
      imageUrl,
      specialization,
      experience,
      location,
      date,
      slots,
      fee,
    });

    res.status(201).json({ message: 'Doctor added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const getAllDoctors = asyncHandler(async (req, res) => {
  try {
    const doctors = await DoctorModel.find();
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const updateDoctor = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      imageUrl,
      specialization,
      experience,
      location,
      date,
      slots,
      fee,
    } = req.body;

    await DoctorModel.findByIdAndUpdate(id, {
      name,
      imageUrl,
      specialization,
      experience,
      location,
      date,
      slots,
      fee,
    });

    res.status(200).json({ message: 'Doctor updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const deleteDoctor = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    await DoctorModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = { addDoctor, getAllDoctors, updateDoctor, deleteDoctor };
