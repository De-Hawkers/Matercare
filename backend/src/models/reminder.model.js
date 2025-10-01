import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
    user: {type: String,
        required: true
    },
  pregnancyStartDate: {type: Date},
});

const reminder = mongoose.model("reminder", reminderSchema)

export default reminder;