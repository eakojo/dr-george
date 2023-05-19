// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const formData = JSON.parse(req.body)


  console.log('Address is ', process.env.GMAIL_EMAIL_ADDRESS)
  const message = {
    from: formData.email,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: 'Wibexly Contact Us Form',
    text: formData.message,
    html: `
          <p>${formData.firstName}</p>
          <p>${formData.lastName}</p>  
          <p>${formData.email}</p>  
          <p>${formData.phone}</p>  
          <p>${formData.message}</p>  
        `,
  };

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  if (req.method === 'POST') {
    transporter.sendMail(message, (err, info) => {

      if (err) {
        console.log(err)
        res.status(404).json({
          error: `Connection refused at ${err.address}`
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`
        });
      }
    });
  }
}
