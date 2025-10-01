// import Contact from "../models/emergency.model.js";
// import sendSms from "../lib/twilioService.js";

// //add contact
// export const addContactHandler = async (req, res) => {
//   const {
//     fullName,
//     phoneNumber,
//     alertMessage,
//     isEmergencyContact = true,
//   } = req.body;
//   try {
//     const oldUser = await Contact.findOne({ phoneNumber });
//     if (oldUser) {
//       res
//         .status(409)
//         .json({ message: "User with the phone Number already exist" });
//     } else {
//       const newContact = new Contact({
//         fullName,
//         phoneNumber,
//         alertMessage,
//         isEmergencyContact,
//       });
//       const user = await newContact.save();

//       res.status(201).json({
//         contact: user,
//         message: "Emergency contact added successfully",
//       });
//     }
//   } catch (err) {
//     console.error("Error adding emergency contact", err.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// //get all contacts
// export const getControllerHandler = async (req, res) => {
//   try {
//     const contacts = await Contact.find({});
//     res.json({ contacts });
//     console.log("Contacts fetched successfully!");
//   } catch (error) {
//     console.log("Error fetching Contacts", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// //delete contact
// export const deleteContactHandler = async (req, res) => {
//   try {
//     const contact = await Contact.findById(req.params.id);

//     if (!contact) {
//       return res.status(404).json({ message: "Contact not found!" });
//     }

//     await contact.findByIdAndDelete(req.params.id);

//     res.status(200).json({ message: "Contact deleted successfully" });
//     console.log("Contact deleted successfully");
//   } catch (error) {
//     console.log("Error deleting Contact", error);
//     res
//       .status(500)
//       .json({ message: "Internal server error", error: error.message });
//   }
// };

// // POST emergency alert/message
// export const emergencyAlertHandler = async (req, res) => {
//   try {
//     const alertMessage =
//       req.body.message || "EMERGENCY ALERT: This is a test notification.";

//     // 1. Fetch all emergency contacts from MongoDB
//     const emergencyContacts = await Contact.find({ isEmergencyContact: true });

//     if (emergencyContacts.length === 0) {
//       return res
//         .status(404)
//         .json({ message: "No emergency contacts found in the database." });
//     }

//     // 2. Iterate and send SMS to each contact
//     const sendPromises = emergencyContacts.map((contact) => {
//       // Twilio requires E.164 format
//       const to = contact.phoneNumber;
//       const body = `Alert for ${contact.fullName}: ${alertMessage}`;

//       // Send SMS and capture the promise/result
//       return sendSms(to, body)
//         .then((message) => ({
//           status: "sent",
//           to: contact.phoneNumber,
//           sid: message.sid,
//         }))
//         .catch((error) => ({
//           status: "failed",
//           to: contact.phoneNumber,
//           error: error.message,
//         }));
//     });

//     // Wait for all messages to be sent/fail
//     const results = await Promise.all(sendPromises);

//     // 3. Respond with results
//     const successful = results.filter((r) => r.status === "sent").length;
//     const failed = results.length - successful;

//     res.status(200).json({
//       message: `Emergency alert process complete. ${successful} sent, ${failed} failed.`,
//       detailed_results: results,
//     });
//   } catch (error) {
//     console.error("Error in emergency-alert route:", error);
//     res.status(500).json({
//       message: "Internal server error during alert process.",
//       error: error.message,
//     });
//   }
// };
