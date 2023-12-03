const assert = require('assert');
const axios = require("axios")

const { app } = require('./app');
const PORT = 3000;

let server;

describe("It should test the function to send an email on catching an error", () => {

    before("Spinning up the servers", () => {
        server = app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`);
        });
    });

    it("Should test the endpoint with the error", async () => {
        try {
            await axios.get("http://localhost:3000/");
        } catch (error) {
            assert.equal(error.response.status, 500);
            assert.equal(error.response.data.message, "Error");
            assert.equal(error.response.data.mailSent, true);
        }
    });

    after("Closing the servers", () => {
        server.close();
    });
});