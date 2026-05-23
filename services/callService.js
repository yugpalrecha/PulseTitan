import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function makeEmergencyCall(symptomText) {

  try {

    const call = await client.calls.create({

      twiml: `
      <Response>
        <Say voice="alice">
        Medical emergency detected.
        The patient reported: ${symptomText}.
        Please assist immediately.
        </Say>
      </Response>
      `,

      to: process.env.EMERGENCY_CONTACT,
      from: process.env.TWILIO_PHONE_NUMBER

    });

    console.log("📞 Emergency call started:", call.sid);

  } catch (error) {

    console.log("Call failed:", error.message);

  }

}