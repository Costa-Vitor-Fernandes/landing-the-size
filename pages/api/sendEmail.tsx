import { NextApiRequest, NextApiResponse } from "next";
import sgMail from '@sendgrid/mail'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // const { value } = req.body;

    try {
      // const sgMail = require("@sendgrid/mail");
 
        sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));
        console.log('olha a key', process.env.SENDGRID_API_KEY)
      const msg = {
        to: 'usize.web@gmail.com', // Change to your recipient
        from: "boodutcivkvqsuykcm@cwmxc.com", // Change to your verified sender
        subject: "Agendar Demonstração",
        text: 'client',
        html: `${JSON.stringify(req.body)}`,
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error:any) => {
          console.error(error);
        });

      res.status(200).json({ message: 'Email Sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
