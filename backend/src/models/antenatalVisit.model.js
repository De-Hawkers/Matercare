import mongoose from "mongoose";

const AntenatalVisitSchema = new mongoose.Schema(
  {
    // Link the visit to a User (the pregnant woman)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Visit Dete
    visitDate: {
      type: Date,
      default: Date.now,
      required: true,
    },

    // Core Measurements
    weight_kg: { type: Number, required: true },
    bloodPressure_sys: { type: Number, required: true }, // Systolic BP
    bloodPressure_dia: { type: Number, required: true }, // Diastolic BP

    // Fetal/Maternal Health
    fetalHeartRate_bpm: { type: Number, min: 100, max: 180 },
    fundalHeight_cm: { type: Number },
    urineTest: {
      type: String,
      enum: ["Negative", "Protein", "Glucose", "Other"],
    }, // Simplified

    // Clinical Notes
    notes: { type: String, trim: true },

    // The sequential number of the visit (e.g., Visit 1, Visit 2)
    visitNumber: { type: Number, required: true, min: 1 },
  },
  { timestamps: true }
);

const AntenatalVisit = mongoose.model("AntenatalVisit", AntenatalVisitSchema);

export default AntenatalVisit;