export const config = {
  smtp: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
      user: 'service@gmail.com',
      pass: 'xxxxx',
    },
  },
};
