import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "fullName is required"],
    },
    phoneNumber: {
      type: String,
      required: [true, "number is required"],
      unique: true,
      // Phone numbers should be stored in E.164 format (e.g., +15558675309)
      match: /^\+[1-9]\d{1,14}$/,
    },
    alertMessage: {
      type: String,
      required: [true, "message is required"],
    },
    isEmergencyContact: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", userSchema);

export default Contact;
