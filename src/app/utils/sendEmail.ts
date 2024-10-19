import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      user: 'mdmmalamin@gmail.com',
      pass: 'bfqw lxdm tyjk hapj',
    },
  });

  await transporter.sendMail({
    from: 'mdmmalamin@gmail.com', // sender address
    to, // list of receivers
    subject: 'Reset your password with in 10 minutes | UMS', // Subject line
    text: 'Hello world?', // plain text body
    html, // html body
  });
};

// : 'amin.js2023@gmail.com'
