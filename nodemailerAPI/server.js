const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
require("dotenv").config();
console.log(process.env.EMAIL);
let transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
        user: process.env.EMAIL,
        pass: process.env.WORD,
    },
});


app.post('/send', function (req, res) {
    console.log(req.body);
    transporter.verify((err, success) => {
        err
            ? console.log(err)
            : console.log(`=== Server is ready to take messages: ${success} ===`);
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: req.body.name && '',
        html: `<table><tr>` +
            `<td>Name: </td><td>${req.body.name}</td></tr>` +
            `<tr><td>Email: </td><td>${req.body.to}</td></tr></table>`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.send({ "status": "fail" });
            console.log("Error " + err);
        } else {
            res.send({ "status": "success" });
            console.log("Email sent successfully");
        }
    });
})

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});