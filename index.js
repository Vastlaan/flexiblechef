const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const keys = require("./config/keys");

//initialize sendgrig API key
sgMail.setApiKey(keys.SgSecret);

const app = express();
app.use(bodyParser.json());

app.post("/api/submitForm", (req, res) => {
    const { name, email, message } = req.body;
    const msg = {
        to: [email, "info@michalantczak.com"],
        from: "no-reply@flexiblechef.nl",
        subject: "Contact form submission",
        html: `
            <h1 style='background-color: #0b4f6c; color: white; width: 100%; padding: 1rem 2rem; text-align: center;'>Flexible Chef</h1>
            <h3 style='text-align: center; font-size: 25px;'>Bedankt <strong>${name}</strong>!</h3>
            <p style='text-align:center; font-size: 20px;'>Ik heb je bericht in goede orde ontvangen. Ik neem zo spoedig mogelijk contact met je op.</p>
            <p style='text-align:center; font-size: 20px; background-color: lightyellow; padding: 2rem;'>${message}</p>
        `,
    };

    sgMail.send(msg);

    res.status(200).json("Sucess");
});

app.post("/submitChefRequest", (req, res) => {
    const { name, address, email, phone, date, start, end, price } = req.body;
    console.log(req.body);

    const msg = {
        to: [email, "info@michalantczak.com"],
        from: "no-reply@flexiblechef.nl",
        subject: "Flexible Chef Verzoek Bevestiging",
        html: `
            <h1 style='background-color: #0b4f6c; color: white; width: 100%; padding: 1rem 2rem; text-align: center;'>Flexible Chef Verzoek Bevestiging</h1>
            <h3 style='text-align: center; font-size: 25px;'>Ik heb uw bericht in goede orde ontvangen!</h3>
            <p style='text-align:center; font-size: 20px;'>Datum werkzaamheden: <strong>${date}</strong></p>
            <p style='text-align:center; font-size: 20px;'>Starttijd: <strong>${start}</strong> Eindtijd: <strong>${end}</strong> </p>
            <p style='text-align:center; font-size: 20px;'>Bedrijf: <strong>${name}</strong></p>
            <p style='text-align:center; font-size: 20px;'>Adres: <strong>${address}</strong></p>
            <p style='text-align:center; font-size: 20px;'>Email: <strong>${email}</strong></p>
            <p style='text-align:center; font-size: 20px;'>Telefoon: <strong>${phone}</strong></p>
            <p style='text-align:center; font-size: 20px;'>Price: <strong>${price}</strong><sub>excl.BTW</sub></p>
            <p style='text-align:center; font-size: 20px;'>Ik neem contact met je op.</p>
            </br>
            </br>
            <p style='text-align:center; font-size: 20px;'>Flexible Chef, Michal Antczak</p>
            <p style='text-align:center; font-size: 20px;'>info@flexiblechef.nl</p>
            <p style='text-align:center; font-size: 20px;'>06 82 30 70 51</p>
        `,
    };

    sgMail.send(msg);

    res.status(200).json("Sucess");
});

if (process.env.NODE_ENV === "production") {
    const path = require("path");
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
    });
}

const PORT = process.env.PORT || 4580;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
