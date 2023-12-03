const AWS = require("aws-sdk");
const dotenv = require("dotenv");

dotenv.config();

const awsSES = async (error) => {
  AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  const ses = new AWS.SES({ apiVersion: "2010-12-01" });

  const sendEmail = async () => {
    const params = {
      Source: process.env.VERIFIED_EMAIL, // Verified email
      Destination: {
        ToAddresses: process.env.EMAILS.split(","),
      },
      Message: {
        Subject: { Data: `Error at  :- , ${process.env.APP_NAME}` },
        Body: {
          Text: {
            Data: `Hello, this is a test email from AWS SES. ERROR : - ${JSON.stringify(
              error
            )}`,
          },
        },
      },
    };

    try {
      await ses.sendEmail(params).promise();
      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  };
  return sendEmail();
}

module.exports.awsSES = awsSES;
