const express = require("express");
const cors = require("cors");
const { awsSES } = require("..");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
    try {
        awsSES(error);
        throw new error();
        return res.json({ message: "Success" });  // Doesn't execute
    } catch (error) {
        // console.error(error);
        const mailSent = await awsSES(error);
        return res.status(500).json({ message: "Error", mailSent: mailSent });
    }
});

module.exports.app = app;
