const nodemailer = require("../config/nodemailer");

exports.send_new_user = (data) => {
  console.log("Inside new signup mailer");

  // create a nodemailer transporter object
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "yourgmailusername@gmail.com",
      pass: "yourgmailpassword",
    },
  });

  nodemailer.transporter.sendMail(
    {
      from: "shivamggupta2604@gmail.com",
      to: email,
      subject: "New User Signed Up!",
      html: "<h3>Hello<h3/>" + data.firstName + " <h3>thanks for signup</h3>",
    },

    (err, info) => {
      if (err) {
        console.log("Error occured during mail sending", err);
        return;
      }
      console.log("Mail Sent Successfully");
    }
  );
};
