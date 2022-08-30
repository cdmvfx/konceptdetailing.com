import { NextApiHandler } from "next";
import clientPromise from "../../lib/mongodb";
import Vonage from '@vonage/server-sdk'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler: NextApiHandler = async (req, res) => {

	const verify = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${req.body.token}`, {
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
    apiKey: process.env.VONAGE_API_KEY as string,
    apiSecret: process.env.VONAGE_API_SECRET as string,
  });

	const name = req.body.name;
	const email = req.body.email;
	const phone = req.body.phone;
	const details = req.body.details;

  const from = process.env.VONAGE_PHONE_FROM as string;
  const to = process.env.VONAGE_PHONE_TO as string;
  const text = `
		New Contact Submission
		Name: ${name}
		Email: ${email}
		Phone: ${phone}
		Details: ${details}
		`;

  vonage.message.sendSms(from, to, text, {}, (err, responseData) => {
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

export default handler;