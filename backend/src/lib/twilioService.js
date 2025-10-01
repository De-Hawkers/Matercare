// import twilio from "twilio";

// // Load Twilio credentials from environment variables
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// // Initialize the Twilio client
// const client = twilio(accountSid, authToken);

// /**
//  * Sends an SMS message using the Twilio client.
//  * @param {string} to - The recipient's phone number in E.164 (+234) format.
//  * @param {string} body - The message content.
//  * @returns {Promise<object>} The Twilio message response object.
//  */
// const sendSms = async (to, body) => {
//   try {
//     const message = await client.messages.create({
//       body: body,
//       from: twilioPhoneNumber,
//       to: to,
//     });
//     console.log(`SMS queued with SID: ${message.sid}`);
//     return message;
//   } catch (error) {
//     console.error("Twilio Error:", error);
//     throw new Error(`Failed to send SMS: ${error.message}`);
//   }
// };

// export default sendSms;
