import { NextApiHandler } from "next";
import { db } from "../../drizzle";
import { contactFormTable } from "../../drizzle/schema";

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

	await db.insert(contactFormTable).values({
		name: name,
		email: email,
		phone: phone,
		details: details,
	}).execute();

	res.status(200).json({ status: "success" });
}

export default handler;