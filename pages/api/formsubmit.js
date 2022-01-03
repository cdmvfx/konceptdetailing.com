import clientPromise from "../../lib/mongodb";

const Vonage = require("@vonage/server-sdk");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

	const verify = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=6LfkvOcdAAAAANdtKBRYTDt3Qef-Uawsxz3b7rrj&response=${req.body.token}`, {
				method: "POST"
			})
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					return res;
				})
				.catch((err) => {
					console.log(err)
				})
	
	if ( !verify ) {
		res.status(200).json({ status: "failed", message: verify['error-codes'] });
		return;
	}

  const vonage = new Vonage({
    apiKey: "a51fac8b",
    apiSecret: "cFOb5fhJnL1gMCXz",
  });

	const name = req.body.name;
	const email = req.body.email;
	const phone = req.body.phone;
	const details = req.body.details;

  const from = "18886030010";
  const to = "18134516954";
  const text = `
		New Contact Submission
		Name: ${name}
		Email: ${email}
		Phone: ${phone}
		Details: ${details}
		`;

  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]["status"] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(
          `Message failed with error: ${responseData.messages[0]["error-text"]}`
        );
      }
    }
  });

	const client = await clientPromise;
	const website = client.db('website');
	const insertres = await website.collection('contact_form').insertOne({
		date: new Date().toISOString(),
		name: name,
		email: email,
		phone: phone,
		details: details
	});

  res.status(200).json({ status: "success" });
}
