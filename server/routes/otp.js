const nodemailer = require('nodemailer')
const express=require("express");
const router=express.Router()
var email;

var otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);
console.log(otp);

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    service: 'Gmail',

    auth: {
        user: 'princesahil0065@gmail.com',
        pass: 'ktxdnfnxeihkdxen',
    }

});

router.post('/send', function (req, res) {
    email = req.body.email;

    // send mail with defined transport object
    var mailOptions = {
        to: req.body.email,
        subject: "Otp for registration is: ",
        html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json(error)
        }
        // console.log('Message sent: %s', info.messageId);
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        return res.json(otp)
    });
});


router.post('/resend', function (req, res) {
    var mailOptions = {
        to: req.body.email,

        subject: "Otp for registration is: ",
        html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json(error);
        }
        // console.log('Message sent: %s', info.messageId);
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        return res.json(otp)
    });

});

module.exports=router;