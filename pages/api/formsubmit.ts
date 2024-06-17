import { NextApiHandler } from "next";
import clientPromise from "../../lib/mongodb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler: NextApiHandler = async (req, res) => {

	const verify = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${req.body.token}`, {
		method: "POST"
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log(err)
		})

	if (!verify) {
		res.status(400).json({ status: "failed", message: verify['error-codes'] });
		return;
	}

	const { name, email, phone, details } = req.body;

	const from = process.env.VONAGE_PHONE_FROM as string;
	const to = process.env.VONAGE_PHONE_TO as string;
	const text = `
		New Contact Submission
		Name: ${name}
		Email: ${email}
		Phone: ${phone}
		Details: ${details}
		`;

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