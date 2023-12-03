function awsSES(error) {
    
    // Import AWS SD
    const AWS = require("aws-sdk");
    // Configure AWS with your access and secret key
    // (Assuming you have already configured your AWS credentials)
    AWS.config.update({
      region: "ap-south-1",
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccess,
    });
  
    // Create an AWS SES service object
    const ses = new AWS.SES({ apiVersion: "2010-12-01" });
  
    const sendEmail = async () => {
      const params = {
        Source: process.env.verifiedEmail, // Verified email
        Destination: {
          ToAddresses: [
            process.env.emails,
          ],
        },
        Message: {
          Subject: { Data: `Error at  :- , ${process.env.appName}` },
          Body: {
            Text: { Data: `Hello, this is a test email from AWS SES. ERROR : - ${JSON.stringify(error)}`  },
          },
        },
      };
  
      try {
        const response = await ses.sendEmail(params).promise();
        console.log("Email sent:", response);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    };
    sendEmail();
  }

module.exports.awsSES = awsSES