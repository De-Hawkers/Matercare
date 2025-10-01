import AntenatalVisit from "../models/antenatalVisit.model";
import User from "../models/user.model";

export const addVisit = async (req, res) => {
  try {
    const {
      userId,
      weight_kg,
      bloodPressure_sys,
      bloodPressure_dia,
      ...otherFields
    } = req.body;

    // 1. Validation (Basic check)
    if (!userId || !weight_kg || !bloodPressure_sys || !bloodPressure_dia) {
      return res.status(400).json({
        message:
          "Missing required fields: userId, weight, and BP are mandatory.",
      });
    }

    // 2. Automatically determine the visit number
    const lastVisit = await AntenatalVisit.findOne({ user: userId }).sort({
      visitNumber: -1,
    }); // Get the highest visit number

    const nextVisitNumber = lastVisit ? lastVisit.visitNumber + 1 : 1;

    // 3. Create the new visit record
    const newVisit = new AntenatalVisit({
      user: userId,
      weight_kg,
      bloodPressure_sys,
      bloodPressure_dia,
      visitNumber: nextVisitNumber,
      ...otherFields,
    });

    await newVisit.save();

    res.status(201).json({
      message: `Visit ${nextVisitNumber} recorded successfully!`,
      data: newVisit,
    });
  } catch (error) {
    console.error("Error recording antenatal visit:", error);
    res
      .status(500)
      .json({ message: "Failed to record visit.", error: error.message });
  }
};

export const getVisit = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if the user exists (optional but recommended)
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Fetch all visits for this user, sorted by date (or visit number)
    const visits = await AntenatalVisit.find({ user: userId }).sort({
      visitDate: 1,
    }); // Ascending order

    res.status(200).json({
      user: { _id: user._id, name: user.name },
      count: visits.length,
      records: visits,
    });
  } catch (error) {
    console.error("Error fetching antenatal history:", error);
    res.status(500).json({
      message: "Failed to retrieve visit history.",
      error: error.message,
    });
  }
};
