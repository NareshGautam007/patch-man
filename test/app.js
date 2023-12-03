const express = require("express");
const { awsSES } = require("..");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    try {
        awsSES(error)
        return res.json({message: "Success"})
        throw new error;
        
    } catch (error) {
        //awsSES(error)
        console.error(error)
    }
});

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

module.exports.app =app
