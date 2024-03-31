import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

export const medicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
